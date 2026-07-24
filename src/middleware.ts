import { NextRequest, NextResponse } from "next/server";

const UPSTREAM = "https://www.peak-health.io";
const BRAND_TITLE = "North Star MD | Patient Portal";

function rewritePortalHtml(html: string): string {
  let out = html;

  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${BRAND_TITLE}</title>`);
  out = out.replace(
    /content="Peak Health OS \| Telehealth Infrastructure[^"]*"/gi,
    `content="${BRAND_TITLE}"`
  );
  out = out.replace(/content="Peak Health OS"/gi, 'content="North Star MD"');
  out = out.replace(
    /name="author" content="Peak Health OS"/gi,
    'name="author" content="North Star MD"'
  );
  out = out.replace(
    /name="apple-mobile-web-app-title" content="Peak Health OS"/gi,
    'name="apple-mobile-web-app-title" content="North Star MD"'
  );
  out = out.replace(/name="theme-color" content="#064e3b"/gi, 'name="theme-color" content="#0f2341"');
  out = out.replace(/href="\/logo\/portal-logo\.png"/gi, 'href="/favicon.svg"');

  const guard = `<script>(function(){var t=${JSON.stringify(BRAND_TITLE)};function f(){if(/Peak Health OS/i.test(document.title))document.title=t}f();var e=document.querySelector("title");if(e&&window.MutationObserver)new MutationObserver(f).observe(e,{childList:!0,characterData:!0,subtree:!0});})();</script>`;
  out = out.replace("</head>", guard + "</head>");

  return out;
}

export const config = {
  matcher: ["/care/:path*"],
};

export default async function middleware(request: NextRequest) {
  if (request.method !== "GET") {
    return NextResponse.next();
  }

  const url = new URL(request.url);
  const pathname = url.pathname;

  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return NextResponse.next();
  }

  const accept = request.headers.get("accept") || "";
  if (!accept.includes("text/html") && !accept.includes("*/*")) {
    return NextResponse.next();
  }

  const upstreamUrl = `${UPSTREAM}${pathname}${url.search}`;

  let response: Response;
  try {
    response = await fetch(upstreamUrl, {
      headers: {
        accept: "text/html",
        "user-agent": request.headers.get("user-agent") || "northstar-portal-proxy",
      },
      redirect: "follow",
    });
  } catch {
    return NextResponse.next();
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return NextResponse.next();
  }

  const html = await response.text();
  if (!html.includes("<html")) {
    return NextResponse.next();
  }

  const headers = new Headers(response.headers);
  headers.set("content-type", "text/html; charset=utf-8");
  headers.delete("content-encoding");
  headers.delete("content-length");

  return new Response(rewritePortalHtml(html), {
    status: response.status,
    headers,
  });
}

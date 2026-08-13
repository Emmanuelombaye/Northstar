import { Link } from "@/lib/routerAdapter";

export function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <svg className="announcement-star" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 1L9.2 6.2L14.5 7.2L9.2 8.2L8 13.5L6.8 8.2L1.5 7.2L6.8 6.2L8 1Z"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
      </svg>
      <p>
        Licensed clinical care. Clear pricing. Qualified U.S. pharmacy fulfillment.{" "}
        <a href="/start">Check Eligibility</a>
      </p>
    </div>
  );
}

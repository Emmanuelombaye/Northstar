// North Star MD — Membership Interactive Price Toggle

document.addEventListener("DOMContentLoaded", () => {
  const billingSwitch = document.querySelector(".billing-switch");
  const monthlyLabel = document.getElementById("label-monthly");
  const annualLabel = document.getElementById("label-annual");
  
  if (!billingSwitch) return;

  const planData = {
    metabolic: {
      monthlyPrice: 79,
      annualPrice: 67,
      monthlyText: "billed monthly",
      annualText: "billed $804 annually",
      monthlySavings: "",
      annualSavings: "Save $144 / year"
    },
    longevity: {
      monthlyPrice: 149,
      annualPrice: 126,
      monthlyText: "billed monthly",
      annualText: "billed $1,512 annually",
      monthlySavings: "",
      annualSavings: "Save $276 / year"
    },
    executive: {
      monthlyPrice: 299,
      annualPrice: 254,
      monthlyText: "billed monthly",
      annualText: "billed $3,048 annually",
      monthlySavings: "",
      annualSavings: "Save $540 / year"
    }
  };

  const updatePrices = (isAnnual) => {
    // Toggle active state classes
    billingSwitch.classList.toggle("is-annual", isAnnual);
    monthlyLabel.classList.toggle("is-active", !isAnnual);
    annualLabel.classList.toggle("is-active", isAnnual);

    // Update each card
    Object.keys(planData).forEach((planKey) => {
      const card = document.querySelector(`.card-membership[data-plan="${planKey}"]`);
      if (!card) return;

      const priceElement = card.querySelector(".plan-price");
      const termElement = card.querySelector(".plan-term");
      const savingsElement = card.querySelector(".plan-savings-tag");

      const data = planData[planKey];
      const targetPrice = isAnnual ? data.annualPrice : data.monthlyPrice;
      const targetTerm = isAnnual ? data.annualText : data.monthlyText;
      const targetSavings = isAnnual ? data.annualSavings : data.monthlySavings;

      if (priceElement) {
        // Smooth transition effect
        priceElement.style.opacity = 0;
        setTimeout(() => {
          priceElement.textContent = targetPrice;
          priceElement.style.opacity = 1;
        }, 120);
      }

      if (termElement) {
        termElement.textContent = targetTerm;
      }

      if (savingsElement) {
        savingsElement.textContent = targetSavings;
      }

      // Dynamically inject billing cycle parameter to buy flow if required
      const buyBtn = card.querySelector(".btn[data-shop]");
      if (buyBtn && window.NORTHSTAR_SHOP) {
        const category = buyBtn.getAttribute("data-shop-category") || "catalog";
        const cycle = isAnnual ? "annual" : "monthly";
        
        // Dynamically build white-label URL
        const shopUrlFn = window.NORTHSTAR_SHOP.category;
        const baseHref = category !== "catalog" 
          ? shopUrlFn(category) 
          : window.NORTHSTAR_SHOP.catalog();
          
        // Append billing cycle to URL parameters
        const urlObj = new URL(baseHref);
        urlObj.searchParams.set("billing", cycle);
        buyBtn.setAttribute("href", urlObj.toString());
      }
    });
  };

  // Toggle events
  let isAnnualBilling = false;

  billingSwitch.addEventListener("click", () => {
    isAnnualBilling = !isAnnualBilling;
    updatePrices(isAnnualBilling);
  });

  monthlyLabel.addEventListener("click", () => {
    if (isAnnualBilling) {
      isAnnualBilling = false;
      updatePrices(isAnnualBilling);
    }
  });

  annualLabel.addEventListener("click", () => {
    if (!isAnnualBilling) {
      isAnnualBilling = true;
      updatePrices(isAnnualBilling);
    }
  });

  // Run initial state update to ensure links include default "monthly" billing parameter
  setTimeout(() => updatePrices(false), 200);
});

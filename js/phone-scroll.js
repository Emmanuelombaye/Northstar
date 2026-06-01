const phoneScroll = document.querySelector(".phone-scroll");

if (phoneScroll) {
  const steps = [...phoneScroll.querySelectorAll(".phone-step")];
  const slides = [...phoneScroll.querySelectorAll(".phone-slide")];
  const dots = [...phoneScroll.querySelectorAll(".phone-progress-dot")];
  const screenStep = phoneScroll.querySelector(".phone-screen-step");

  const setActiveStep = (stepId) => {
    const id = String(stepId);

    steps.forEach((step) => {
      step.classList.toggle("is-active", step.dataset.step === id);
    });

    slides.forEach((slide) => {
      slide.classList.toggle("is-active", slide.dataset.step === id);
    });

    dots.forEach((dot) => {
      dot.classList.toggle("is-active", dot.dataset.step === id);
    });

    if (screenStep) {
      screenStep.textContent = `Step ${id}`;
    }
  };

  if (steps.length && slides.length) {
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    const getObserverOptions = () => ({
      root: null,
      rootMargin: mobileQuery.matches ? "-32% 0px -32% 0px" : "-38% 0px -38% 0px",
      threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
    });

    let observer = new IntersectionObserver((entries) => {
      const best = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (best) {
        setActiveStep(best.target.dataset.step);
      }
    }, getObserverOptions());

    const observeSteps = () => {
      observer.disconnect();
      observer = new IntersectionObserver((entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (best) {
          setActiveStep(best.target.dataset.step);
        }
      }, getObserverOptions());

      steps.forEach((step) => observer.observe(step));
    };

    observeSteps();

    mobileQuery.addEventListener("change", observeSteps);

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const target = phoneScroll.querySelector(
          `.phone-step[data-step="${dot.dataset.step}"]`
        );
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          setActiveStep(dot.dataset.step);
        }
      });
    });
  }
}

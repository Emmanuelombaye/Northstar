const phoneScroll = document.querySelector(".phone-scroll");

if (phoneScroll) {
  const steps = [...phoneScroll.querySelectorAll(".phone-step")];
  const slides = [...phoneScroll.querySelectorAll(".phone-slide")];
  const dots = [...phoneScroll.querySelectorAll(".phone-progress-dot")];

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
  };

  if (steps.length && slides.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (best) {
          setActiveStep(best.target.dataset.step);
        }
      },
      {
        root: null,
        rootMargin: "-38% 0px -38% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      }
    );

    steps.forEach((step) => observer.observe(step));

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

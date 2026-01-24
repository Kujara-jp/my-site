document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const backToTop = document.querySelector(".back-to-top");
  const faqButtons = document.querySelectorAll(".faq-question");

  const setMenuState = (open) => {
    if (!menuToggle || !navLinks) {
      return;
    }

    menuToggle.classList.toggle("active", open);
    navLinks.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open ? "メニューを閉じる" : "メニューを開く",
    );
  };

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const open = !navLinks.classList.contains("is-open");
      setMenuState(open);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false);
      });
    });
  }

  document.querySelectorAll("[data-scroll-to]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("data-scroll-to");
      if (!targetId) {
        return;
      }

      const targetElement = document.getElementById(targetId);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      if (!item) {
        return;
      }

      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));

      const panelId = button.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;
      if (panel) {
        panel.setAttribute("aria-hidden", String(!isOpen));
      }

      const icon = button.querySelector(".faq-icon");
      if (icon) {
        icon.textContent = isOpen ? "−" : "+";
      }
    });
  });

  const toggleBackToTop = () => {
    if (!backToTop) {
      return;
    }

    const show = window.scrollY > 480;
    backToTop.classList.toggle("is-visible", show);
  };

  toggleBackToTop();
  window.addEventListener("scroll", toggleBackToTop, { passive: true });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      setMenuState(false);
    }
  });
});

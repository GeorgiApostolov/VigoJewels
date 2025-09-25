// navigationAnimation.js
export function initNavigationAnimation() {
  const htmlEl = document.documentElement;
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");
  const backdrop = document.getElementById("backdrop");
  const header = document.getElementById("mHeader");

  if (!openBtn || !closeBtn || !backdrop || !header) return;

  // === Drawer ===
  function openMenu() {
    htmlEl.classList.add("menu-open", "noscroll");
    setTimeout(() => closeBtn && closeBtn.focus(), 10);
  }
  function closeMenu() {
    htmlEl.classList.remove("menu-open", "noscroll");
    openBtn && openBtn.focus();
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // === Smart Hide-on-Scroll ===
  const HIDE_DELTA = 12;
  const REVEAL_DELTA = 4;
  const START_OFFSET = 24;

  let lastY = window.scrollY;
  let hidden = false;
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      if (htmlEl.classList.contains("menu-open")) {
        ticking = false;
        return;
      }

      const y = window.scrollY;
      const dy = y - lastY;

      if (!hidden && dy > HIDE_DELTA && y > START_OFFSET) {
        header.classList.add("hide");
        hidden = true;
      }
      if (hidden && dy < -REVEAL_DELTA) {
        header.classList.remove("hide");
        hidden = false;
      }

      lastY = y;
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    header.classList.remove("hide");
    hidden = false;
  });
}

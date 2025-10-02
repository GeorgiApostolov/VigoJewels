export function initNav() {
  const htmlEl = document.documentElement;
  const header = document.getElementById("mHeader");
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");
  const backdrop = document.getElementById("backdrop");
  const drawer = document.getElementById("drawer");

  const openMenu = () => {
    backdrop?.removeAttribute("hidden"); // ← показваме backdrop-а
    document.documentElement.classList.add("menu-open", "noscroll");
    setTimeout(() => closeBtn?.focus(), 10);
  };

  const closeMenu = () => {
    document.documentElement.classList.remove("menu-open", "noscroll");
    backdrop?.setAttribute("hidden", ""); // ← скриваме backdrop-а
    openBtn?.focus();
  };

  // — Handlers (guard-ове да не закачаме по два пъти)
  openBtn?.addEventListener("click", openMenu, { once: false });
  closeBtn?.addEventListener("click", closeMenu, { once: false });
  backdrop?.addEventListener("click", closeMenu, { once: false });

  // ❗ Затваряне при клик на линк в менюто
  drawer?.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeMenu();
  });

  // Esc затваря
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // По избор: при scroll up показвай header; ако менюто е отворено — не крий/показвай
  let lastY = window.scrollY,
    hidden = false,
    ticking = false;
  const HIDE_DELTA = 12,
    REVEAL_DELTA = 4,
    START_OFFSET = 24;

  const onScroll = () => {
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
        header?.classList.add("hide");
        hidden = true;
      }
      if (hidden && dy < -REVEAL_DELTA) {
        header?.classList.remove("hide");
        hidden = false;
      }
      lastY = y;
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  // Затвори менюто при смяна на роута (SPA)
  window.addEventListener("popstate", closeMenu);
  // ако ползваш page.js, можеш на глобалния hook:
  // page('*', (ctx, next) => { closeMenu(); next(); });
}

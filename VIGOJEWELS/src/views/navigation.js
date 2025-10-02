// src/views/navigation.js
import { html, render } from "lit-html";
import { initNav } from "./navigationAnimation.js";

const mount = document.getElementById("header-root");

// === helpers ===
export const isLoggedIn = () => !!localStorage.getItem("authToken");
export const isAdmin = () => localStorage.getItem("isAdmin") === "1";

// Позовай това след логин/лог-аут за да се прерисува header-а
export function refreshNav() {
  render(template(), mount);
  // initNav само веднъж за да не се закачат двойно listener-и
  if (!document.documentElement.dataset.navInit) {
    initNav();
    document.documentElement.dataset.navInit = "1";
  }
}

// Стартов рендер
export default function navigationPage() {
  refreshNav();
}

// === view ===
const template = () => {
  const profileHref = isLoggedIn() ? "/profile" : "/login";

  return html`
    <!-- HEADER -->
    <header class="m-header" id="mHeader">
      <div class="bar">
        <div class="left">
          <!-- hamburger (mobile) -->
          <button class="icon-btn" id="openMenu" aria-label="Меню">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18v2H3M3 11h18v2H3m0 5h18v2H3" />
            </svg>
          </button>
        </div>

        <!-- Лого -->
        <a href="/" class="brand" aria-label="VIGOJEWELS">
          VIGO<span>JEWELS</span>
        </a>

        <div class="right">
          <a href=${profileHref} class="icon-btn" aria-label="Профил">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-3.9 0-10 2-10 6v2h20v-2c0-4-6.1-6-10-6Z"
              />
            </svg>
          </a>

          <button class="icon-btn" aria-label="Количка">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 .001 4A2 2 0 0 0 17 18ZM7.2 6l1 2h9l-1.1 5H8.5L6.3 4H2v2h2l3.6 7.6-.7 1.2c-.2.6.2 1.2.9 1.2H18v-2h-8l.6-1h7c.7 0 1.4-.5 1.6-1.3l1.2-5.5c.1-.6-.3-1.1-.9-1.1H7.2Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Desktop categories -->
      <div class="catbar">
        <nav>
          <a href="/collection">БИЖУТА</a>
          <a href="/handmade">HANDMADE</a>
          <a href="/about">ЗА НАС</a>
          <a href="/contact">КОНТАКТИ</a>
          ${isAdmin() ? html`<a href="/admin">АДМИН</a>` : ""}
        </nav>
      </div>
    </header>

    <!-- Drawer -->
    <div class="backdrop" id="backdrop" hidden></div>
    <aside
      class="drawer"
      id="drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Навигация"
    >
      <div class="drawer-top">
        <strong>Меню</strong>
        <button class="icon-btn" id="closeMenu" aria-label="Затвори">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M18.3 5.7 12 12 5.7 5.7 4.3 7.1 10.6 13.4 4.3 19.7 5.7 21.1 12 14.8l6.3 6.3 1.4-1.4-6.3-6.3 6.3-6.3z"
            />
          </svg>
        </button>
      </div>
      <nav class="drawer-list">
        <a href="/collection">БИЖУТА</a>
        <a href="/handmade">HANDMADE</a>
        <a href="/about">ЗА НАС</a>
        <a href="/contact">КОНТАКТИ</a>
        ${isAdmin() ? html`<a href="/admin">АДМИН</a>` : ""}
      </nav>
    </aside>
  `;
};

import page from "../../node_modules/page/page.mjs";
import { html, render } from "lit-html";

const mainEl = document.querySelector("main");

export async function isAdmin() {
  const isAdminStorage = localStorage.getItem(`isAdmin`);
  if (!isAdminStorage) {
    page.redirect(`/`);
  } else {
    render(adminTemplate(), mainEl);
  }
}
function adminTemplate() {
  return html`<h1>ADMIN</h1>`;
}

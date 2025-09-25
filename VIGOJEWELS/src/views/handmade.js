import { html, render } from "lit-html";

const mainEl = document.querySelector(`main`);

export default async function handmadePage() {
  render(handmadeTemplate(), mainEl);
}

function handmadeTemplate() {
  return html``;
}

import { html, render } from "lit-html";

const mainEl = document.querySelector(`main`);

export default async function aboutPage() {
  render(aboutTemplate(), mainEl);
}

function aboutTemplate() {
  return html``;
}

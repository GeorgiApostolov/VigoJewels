import { html, render } from "lit-html";

const mainEl = document.querySelector(`main`);

export default async function contactPage() {
  render(contactTemplate(), mainEl);
}

function contactTemplate() {
  return html``;
}

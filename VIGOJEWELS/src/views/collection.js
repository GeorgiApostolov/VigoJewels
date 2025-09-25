import { html, render } from "lit-html";

const mainEl = document.querySelector(`main`);

export default async function collectionPage() {
  render(collectionTemplate(), mainEl);
}

function collectionTemplate() {
  return html` <section class="categories" aria-label="Категории">
    <div class="container">
      <h2 class="section-title" id="colection">КОЛЕКЦИИ</h2>
      <div class="categories-grid">
        <!-- Обеци -->
        <a href="/earrings" class="category-card">
          <img src="/images/earrings.png" alt="Обеци" />
          <h3>Обеци</h3>
        </a>

        <!-- Колие -->
        <a href="/necklaces" class="category-card">
          <img src="/images/necklaces.png" alt="Колиета" />
          <h3>Колиета</h3>
        </a>

        <!-- Гривни -->
        <a href="/bracelets" class="category-card">
          <img src="/images/bracelets.png" alt="Гривни" />
          <h3>Гривни</h3>
        </a>
      </div>
    </div>
  </section>`;
}

import { html, render } from "lit-html";

const mainEl = document.querySelector(`main`);

export default async function homePage() {
  render(homeTemplate(), mainEl);
}

function homeTemplate() {
  return html`<!-- HERO с видео на фон -->
    <section class="hero" aria-label="Въведение">
      <!-- ЗАМЕНИ hero.mp4 с ваше видео (кратко, ~10–15s, без звук) -->
      <video
        class="video-bg"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster="/images/test.png"
      >
        <source src="/images/background-video-vp9.webm" type="video/webm" />

        <source src="/images/background-video-h264.mp4" type="video/mp4" />

        Вашият браузър не поддържа видео.
      </video>

      <div class="hero-inner container">
        <div class="eyebrow">Limited • New • Drop</div>
        <h1 class="title">Съвременен лукс в розово злато</h1>
        <p class="subtitle">
          Селекция от неръждаема стомана 316L и сребро 925 — създадени да
          блестят всеки ден.
        </p>
        <a class="btn" href="#best">Най-продавани</a>
      </div>
    </section>

    <!-- Най-продавани -->
    <section id="best" aria-label="Най-продавани бижута">
      <div class="container">
        <div class="section-head">
          <h2>Най-продавани бижута</h2>
          <!-- линкът може да води към /products.html -->
          <a class="cta" href="#">Виж всички</a>
        </div>

        <div class="grid">
          <!-- Карта продукт (примерни изображения – замени с ваши) -->
          <article class="card">
            <img
              class="thumb"
              src="/images/test.png"
              alt="Колие Vigo в розово злато"
            />
            <div class="card-body">
              <h3 class="title-sm">Колие „V“ — 316L, Rose Gold</h3>
              <div class="meta">Хипоалергенно • Водоустойчиво</div>
              <div class="price">89.90 лв</div>
            </div>
          </article>

          <article class="card">
            <img class="thumb" src="/images/test.png" alt="Гривна тип верига" />
            <div class="card-body">
              <h3 class="title-sm">Гривна „Chain Glow“</h3>
              <div class="meta">316L • Регулируема</div>
              <div class="price">59.90 лв</div>
            </div>
          </article>

          <article class="card">
            <img
              class="thumb"
              src="/images/test.png"
              alt="Обеци от сребро с камък"
            />
            <div class="card-body">
              <h3 class="title-sm">Обеци „Eterna“ — 925</h3>
              <div class="meta">Родиево покритие</div>
              <div class="price">74.90 лв</div>
            </div>
          </article>

          <article class="card">
            <img class="thumb" src="/images/test.png" alt="Пръстен с камък" />
            <div class="card-body">
              <h3 class="title-sm">Пръстен „Halo“ — Moissanite</h3>
              <div class="meta">925 • 18K позлата</div>
              <div class="price">129.00 лв</div>
            </div>
          </article>
        </div>
      </div>
    </section> `;
}

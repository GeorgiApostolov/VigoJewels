import { html, render } from "lit-html";

const mainEl = document.querySelector(`main`);

export default async function contactPage() {
  render(contactTemplate(), mainEl);
}

function contactTemplate() {
  return html`<section class="contact">
    <div class="contact__container">
      <!-- Лява колона -->
      <div class="contact__left">
        <h2 class="contact__title">Свържете се с нас</h2>
        <p class="contact__lead">
          Няма въпрос, който да е твърде малък или заявка – твърде голяма. От
          избор на бижу до подарък или записване за консултация – винаги сме
          насреща.
        </p>

        <nav class="contact__list" aria-label="Начини за контакт">
          <!-- Call -->
          <a
            class="contact__row"
            href="tel:+359888708066"
            aria-label="Позвънете ни на +359 888 708 066"
          >
            <span class="contact__row-left">
              <span class="contact__icon" aria-hidden="true">
                <!-- phone -->
                <svg viewBox="0 0 24 24">
                  <path
                    d="M6.6 10.2c1.2 2.3 3 4.1 5.3 5.3l1.8-1.8c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 .9v3.1c0 .6-.4 1-1 1C10.9 19 5 13.1 5 5.9c0-.6.4-1 1-1h3.1c.6 0 .9.4.9 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1l-1.7 1.8Z"
                  />
                </svg>
              </span>
              <div class="contact__row-text">
                <strong>Обадете ни се</strong>
                <span class="contact__sub">+359 888 708 066</span>
              </div>
            </span>
            <span class="contact__chev" aria-hidden="true">›</span>
          </a>

          <!-- Book an appointment -->
          <a
            class="contact__row"
            href="/appointment"
            aria-label="Запазете час за консултация"
          >
            <span class="contact__row-left">
              <span class="contact__icon" aria-hidden="true">
                <!-- calendar -->
                <svg viewBox="0 0 24 24">
                  <path
                    d="M7 2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2Zm12 8H5v10h14V10Z"
                  />
                </svg>
              </span>
              <div class="contact__row-text">
                <strong>Запази час</strong>
                <span class="contact__sub">Онлайн или в магазина</span>
              </div>
            </span>
            <span class="contact__chev" aria-hidden="true">›</span>
          </a>

          <!-- Text us -->
          <a
            class="contact__row"
            href="https://wa.me/359888708066"
            target="_blank"
            rel="noopener"
            aria-label="Пишете ни в WhatsApp"
          >
            <span class="contact__row-left">
              <span class="contact__icon" aria-hidden="true">
                <!-- chat -->
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2a9 9 0 0 0-7.8 13.4L3 22l6.8-1.8A9 9 0 1 0 12 2Zm0 2a7 7 0 0 1 0 14c-1.1 0-2.2-.2-3.2-.7l-.3-.1-3.2.9.9-3.1-.2-.3A7 7 0 0 1 12 4Zm3.7 9.6c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1l-.7.8c-.1.1-.3.2-.5.1-1-.4-1.9-1.1-2.6-2-.2-.2-.1-.4.1-.6l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.5-.4-.4-.5-.4h-.4c-.1 0-.4.1-.6.3-.6.6-.9 1.4-.9 2.2 0 .3.1.6.2.9.2.5.6 1 .9 1.4.3.4.6.8 1.1 1.2.8.7 1.8 1.3 2.8 1.7.6.2 1.1.4 1.7.3.6-.1 1.3-.5 1.6-1 .2-.3.3-.7.2-1.1 0 0-.1-.1-.2-.1Z"
                  />
                </svg>
              </span>
              <div class="contact__row-text">
                <strong>Пишете ни</strong>
                <span class="contact__sub">WhatsApp</span>
              </div>
            </span>
            <span class="contact__chev" aria-hidden="true">›</span>
          </a>
        </nav>
      </div>

      <!-- Дясна колона (изображение) -->
      <div class="contact__right">
        <img
          class="contact__image"
          src="/images/contact-hero.jpg"
          alt="Бижута на дисплей"
          loading="lazy"
        />
      </div>
    </div>
  </section>`;
}

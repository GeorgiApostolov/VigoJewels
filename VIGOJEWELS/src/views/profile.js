import { html, render } from "lit-html";

const mainEl = document.querySelector("main");

export default function profilePage() {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return render(
      html`<p>Моля, <a href="/login">влезте</a> в профила си.</p>`,
      mainEl
    );
  }

  // Примерна поръчка
  const orders = [
    {
      id: "1001",
      date: "03.09.2025",
      status: "Обработва се",
      total: "249.00",
      items: [
        {
          name: "Гривна с диаманти",
          qty: 1,
          image: "/images/bracelets.png", // тук сложи правилния път
        },
      ],
    },
    {
      id: "1002",
      date: "05.09.2025",
      status: "Пътува",
      total: "249.00",
      items: [
        {
          name: "Колие",
          qty: 1,
          image: "/images/necklaces.png", // тук сложи правилния път
        },
      ],
    },
  ];

  render(profileTemplate(orders), mainEl);
}

function profileTemplate(orders) {
  return html`
    <section class="profile">
      <div class="container">
        <h2 class="section-title">Поръчки</h2>

        ${orders.length === 0
          ? html`
              <div class="empty-orders">
                <strong>Все още няма поръчки.</strong>
                <p>Посетете магазина, за да направите поръчка.</p>
              </div>
            `
          : html`
              <ul class="orders-list">
                ${orders.map(
                  (o) => html`
                    <li class="order-card">
                      <p><strong>Поръчка №${o.id}</strong></p>
                      <p>Дата: ${o.date}</p>
                      <p>Статус: ${o.status}</p>
                      <p>Сума: ${o.total} лв.</p>
                      <div class="order-items">
                        ${o.items.map(
                          (i) => html`
                            <div class="order-item">
                              <img src="${i.image}" alt="${i.name}" />
                              <div>
                                <p>${i.name}</p>
                                <p>Количество: ${i.qty}</p>
                              </div>
                            </div>
                          `
                        )}
                      </div>
                    </li>
                  `
                )}
              </ul>
            `}
      </div>
    </section>
  `;
}

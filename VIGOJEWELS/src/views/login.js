import { html, render } from "lit-html";
import navigationPage from "./navigation";

const mainEl = document.querySelector("main");

export default function loginPage() {
  render(loginTemplate(), mainEl);
}

function loginTemplate() {
  return html`<section class="auth" id="view-login">
    <div class="card">
      <form class="form" id="login-form" @submit=${loginUser}>
        <div class="field">
          <label for="l-email">Имейл</label>
          <input
            id="l-email"
            name="email"
            type="email"
            autocomplete="email"
            required
          />
        </div>

        <div class="field">
          <label for="l-pass">Парола</label>
          <input
            id="l-pass"
            name="password"
            type="password"
            autocomplete="current-password"
            required
          />
        </div>

        <button class="btn" type="submit">Влез</button>

        <p class="auth-note">
          Нямаш акаунт? <a class="link" href="/register">Създай акаунт</a>
        </p>
      </form>
    </div>
  </section>`;
}

async function login(email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2Vmd03Gcf9-k3uzRTHVln_gzXDhuPnqk`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "Login failed");
  return data;
}

async function loginUser(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const user = await login(email, password);
    console.log("✅ Logged in:", user);

    // можеш да пазиш токена в localStorage
    localStorage.setItem("authToken", user.idToken);
    if (email === `dullskullbg@gmail.com`) {
      localStorage.setItem(`isAdmin`, 1);
    }

    alert("Успешен вход!");
    window.location.href = "/";
    navigationPage();
  } catch (err) {
    console.error("❌", err.message);
    alert("Грешка: " + err.message);
  }
}

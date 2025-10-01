import { html, render } from "lit-html";

const mainEl = document.querySelector(`main`);

export default async function registerPage() {
  render(registerTemplate(), mainEl);
}

function registerTemplate() {
  return html`<!-- register.html -->
    <section class="auth auth-register" id="view-register">
      <div class="card">
        <form
          class="form"
          id="register-form"
          autocomplete="on"
          @submit=${registerUser}
        >
          <div class="grid">
            <div class="field">
              <label for="s-first">Име</label>
              <input id="s-first" name="firstName" type="text" required />
            </div>
            <div class="field">
              <label for="s-last">Фамилия</label>
              <input id="s-last" name="lastName" type="text" required />
            </div>
          </div>

          <div class="field">
            <label for="s-email">Имейл</label>
            <input
              id="s-email"
              name="email"
              type="email"
              autocomplete="email"
              required
            />
          </div>

          <div class="field">
            <label for="s-pass">Парола</label>
            <input
              id="s-pass"
              name="password"
              type="password"
              autocomplete="new-password"
              minlength="6"
              required
            />
          </div>

          <label class="check">
            <input type="checkbox" required />
            <span>Приемам <a class="link" href="/terms">условията</a>.</span>
          </label>

          <button class="btn" type="submit">Създай акаунт</button>

          <p style="text-align:center;color:#cfcfcf;margin:6px 0 0">
            Имаш профил? <a class="link" href="/login">Влез</a>
          </p>
        </form>
      </div>
    </section> `;
}

const fbErrors = {
  EMAIL_EXISTS: "Този имейл вече е регистриран.",
  OPERATION_NOT_ALLOWED: "Email/Password login е изключен в Firebase.",
  TOO_MANY_ATTEMPTS_TRY_LATER: "Твърде много опити. Опитайте отново по-късно.",
  WEAK_PASSWORD: "Паролата трябва да е поне 6 символа.",
};

async function register(email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2Vmd03Gcf9-k3uzRTHVln_gzXDhuPnqk`;

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

  if (!res.ok) {
    const msg =
      fbErrors[data.error?.message] ||
      data.error?.message ||
      "Грешка при регистрация.";
    throw new Error(msg);
  }
  return data;
}

async function registerUser(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.email.value.trim();
  const password = form.password.value;

  // базова валидация в клиента
  if (!email || !password) {
    alert("Моля, въведете имейл и парола.");
    return;
  }
  if (password.length < 6) {
    alert("Паролата трябва да е поне 6 символа.");
    return;
  }

  form.querySelector("button[type=submit]").disabled = true;
  try {
    const user = await register(email, password);
    console.log("✅ Registered:", user);
    window.location.href = "/login";
  } catch (err) {
    alert(err.message);
  } finally {
    form.querySelector("button[type=submit]").disabled = false;
  }
}

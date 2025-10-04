import page from "page/page.mjs";
// npm run dev - така се стартира
// npm run deploy - така се прави dist
import homePage from "./src/views/home.js";
import collectionPage from "./src/views/collection.js";
import handmadePage from "./src/views/handmade.js";
import contactPage from "./src/views/contact.js";
import aboutPage from "./src/views/about.js";
import loginPage from "./src/views/login.js";
import registerPage from "./src/views/register.js";
import navigationPage from "./src/views/navigation.js";
import profilePage from "./src/views/profile.js";
import { isAdmin } from "./src/views/admin.js";

navigationPage();

page("/", homePage);
page(`/handmade`, handmadePage);
page("/admin", isAdmin);
page("/collection", collectionPage);
page("/contact", contactPage);
page("/about", aboutPage);
page("/login", loginPage);
page("/register", registerPage);
page("/profile", profilePage);

page.start();

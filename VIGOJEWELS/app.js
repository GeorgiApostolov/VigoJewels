import page from "./node_modules/page/page.mjs";
// npm run dev - така се стартира
// npm run deploy - така се прави dist
import homePage from "./src/views/home";
import collectionPage from "./src/views/collection";
import handmadePage from "./src/views/handmade";
import contactPage from "./src/views/contact";
import aboutPage from "./src/views/about";
import loginPage from "./src/views/login";
import registerPage from "./src/views/register";
import navigationPage from "./src/views/navigation";
import profilePage from "./src/views/profile";
import { isAdmin } from "./src/views/admin.js";

navigationPage();

page("/", homePage);
page(`/handmade`, handmadePage);
page("/collection", collectionPage);
page("/contact", contactPage);
page("/about", aboutPage);
page("/login", loginPage);
page("/register", registerPage);
page("/profile", profilePage);
page("/admin", isAdmin);

page.start();

import { navbar } from "/componants/navbar.js";

import footer from "/componants/footer.js";

// console.log(navbar);
// console.log(footer);

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let foote = document.getElementById("footer");
foote.innerHTML = footer();

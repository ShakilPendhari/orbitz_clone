import {navbar} from "/dazzling-wing-7781/componants/navbar.js"
import footer from "/dazzling-wing-7781/componants/footer.js"

let nav = document.getElementById('navbar')
nav.innerHTML = navbar();

let foote = document.getElementById('footer')
foote.innerHTML = footer();

let flight = document.querySelector(".flight_schedule");
flight.addEventListener("click", () => {
  window.location.href = "tripdetails.html";
});

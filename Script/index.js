
// import {navbar} from "/componants/navbar.js"


import {navbar} from "/componants/navbar.js"

import footer from "/componants/footer.js"



// import {navbar} from "/dazzling-wing-7781/componants/navbar.js"

// import footer from "/dazzling-wing-7781/componants/footer.js"

window.onload = ()=>{
    console.log(navbar)
console.log(footer)

let nav = document.getElementById('navbar')
nav.innerHTML = navbar();

let foote = document.getElementById('footer')
foote.innerHTML = footer();




let data = true;
let signIn = document.getElementById("Home_signIn_click");
signIn.onclick = ()=>{
    console.log("hello")
  
    if(data)
    {
        let dropDown_menu = document.getElementById("Home_signin");
    dropDown_menu.style.display = "block";
    data = false;
    }
    else{
        let dropDown_menu = document.getElementById("Home_signin");
        dropDown_menu.style.display = "none";
        data = true;
    }
    }
}



// signIn.addEventListener("click", ()=>{
    
// })



let but = document.getElementById('cont_div_div');
but.addEventListener('click',()=>{
    let query = document.getElementById('Destination');
    let gif = query.value;
    if((gif==="mumbai"||gif==="Mumbai"||gif==="MUMBAI"||gif==="Delhi"||gif==="delhi"||gif==="DELHI"))
    {
        window.location.href = "deltomumbai.html"
    }
    else{
        alert("Please select all parameters");
    }
})
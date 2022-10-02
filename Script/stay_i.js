
let box= document.getElementById("main_3");

import {navbar} from "/dazzling-wing-7781/componants/navbar.js"
import footer from "/dazzling-wing-7781/componants/footer.js"

let nav = document.getElementById('navbar')
nav.innerHTML = navbar();

let foote = document.getElementById('footer')
foote.innerHTML = footer();

let append= (data)=>{
    box.innerHTML= null;

    data.map((ele)=>{
        let div1= document.createElement("div");
        div1.setAttribute("class","hotels");

        let imgDiv= document.createElement("div");
        let img= document.createElement("img");
        img.src= ele.hotelImg;

        let detailDiv= document.createElement("div");
        detailDiv.setAttribute("class","hotel_sec");
        let sec_1= document.createElement("div");
        let hName= document.createElement("h3");
        hName.innerText= ele.hotelName;
        hName.style.color="Blue"
        let localName= document.createElement("p");
        localName.innerText= ele.place;
        let pool= document.createElement("p");
        if(ele.pool){
            pool.innerText= "Pool";
        }
        else {
            pool.innerText= "";
        }
        pool.style.color= "aqua"
        let refund= document.createElement("p");
        refund.innerText= "Fully Refundable Property";
        refund.style.color="red"

        let offer= document.createElement("p");
        offer.innerText= "Earn $5.35 orbucks";

        let rating= document.createElement("p");
        rating.innerText= `${ele.rating}/5`;
        rating.style.color= "green"

        let sec_2= document.createElement("div");
        let price= document.createElement("h1");
        price.innerText= `$${ele.hotelPrice}`;
        price.style.color="gold"
        let p1= document.createElement("p");
        p1.innerText= "per Travelers";
        let p2= document.createElement("p");
        p2.innerText= "including flight + stay";
        let p3= document.createElement("p");
        p3.innerText= `$${2*Number(ele.hotelPrice)} trip total`

        div1.addEventListener("click",()=>{
            setTimeout(()=>{
                window.location.href="./stay_II.html"
            },1000)
            
        })

        imgDiv.append(img);
        sec_1.append(hName,localName,pool,refund,offer,rating);
        sec_2.append(price,p1,p2,p3)
        detailDiv.append(sec_1,sec_2);
        div1.append(imgDiv,detailDiv);
        box.append(div1);
    });
};

setTimeout(()=>{
    append(hotels);
},3000)

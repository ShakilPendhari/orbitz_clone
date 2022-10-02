import {navbar} from "/dazzling-wing-7781/componants/navbar.js"
import footer from "/dazzling-wing-7781/componants/footer.js"

let nav = document.getElementById('navbar')
nav.innerHTML = navbar();

let foote = document.getElementById('footer')
foote.innerHTML = footer();

let box= document.getElementById("rooms");

let append=(data)=>{
    box.innerHTML= null;

    data.map((ele)=>{
        let room= document.createElement("div");
        room.setAttribute("class","slot");

        let img= document.createElement("img");
        img.src= ele.roomImg;
        let name= document.createElement("h2");
        name.innerText= ele.roomName;
        name.style.color="Blue";
        let p1= document.createElement("p");
        p1.innerText= "301 sq.ft"
        let p2= document.createElement("p");
        p2.innerText= "City view"
        let p3= document.createElement("p");
        p3.innerText= "Sleep 3"
        let p4= document.createElement("p");
        p4.innerText= "1 King Bed"
        let p5= document.createElement("p");
        p5.innerText= "Free WiFi"
        let p6= document.createElement("p");
        p6.innerText= "Free Self-Parking"
        let p7= document.createElement("p");
        p7.innerText= "Fully Refundable";
        p7.style.color=  "green"

        let price= document.createElement("h2");
        price.innerText=`+ $${ele.price}`;
        price.style.color= "orange"

        let reserve= document.createElement("button");
        reserve.innerText="Reserve";
        reserve.setAttribute("class","book")
        reserve.addEventListener("click",()=>{
            setTimeout(()=>{
                window.location.href= "./deltomumbai.html"
            },1000)
            
        })

        room.append(img,name,p1,p2,p3,p4,p5,p6,p7,price,reserve);
        box.append(room);
    });
};

setTimeout(()=>{
    append(rooms)
},2000)


let box= document.getElementById("main_3");

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
        let localName= document.createElement("p");
        localName.innerText= ele.localArea;
        let pool= document.createElement("p");
        if(ele.pool){
            pool.innerText= "Pool";
        }
        else {
            pool.innerText= "";
        }
        let refund= document.createElement("p");
        refund.innerText= "Fully Refundable Property";

        let offer= document.createElement("p");
        offer.innerText= "Earn $5.35 orbucks";

        let rating= document.createElement("p");
        rating.innerText= `${ele.rating}/5`;

        imgDiv.append(img);
        sec_1.append(hName,localName,pool,refund,offer,rating);
        detailDiv.append(sec_1,sec_2);
        div1.append(imgDiv,detailDiv);
        box.append(div1);
    });
};


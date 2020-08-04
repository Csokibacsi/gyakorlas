function weather(){
    
    let szamInput = document.querySelector("select.form-control");
    let szam = parseInt(szamInput.value);
    /*alert(szam);*/

    weekDays(szam);
}

function weekDays(szam){
    
    let showWeather = document.querySelector("span.show-weather");

    let het = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
    
    /*let temp = [-1, 10, 15, 20, 25];*/

    let temp = [];
    for(let i=0; i<30; i++){
        temp.push(i); 
    }


    let random = temp[Math.floor(Math.random()*temp.length)];
    let napiMenu;

    if(random==0){napiMenu = "forró csoki";
    } else if(random>0 && random<=15) {
        napiMenu = "meleg tea";
    } else if(random>15 && random<=20) {
        napiMenu = "finom süti";
    } else if(random>20 && random<=25){
        napiMenu = "fagyi";
    } else {
        napiMenu = "jéghideg limonádé";
    }
    

    switch(szam){
        case 0:
        showWeather.innerHTML = het[0] + " " + random + " fok, ajánlatunk mára: " + napiMenu ;
        break;
        case 1:
        showWeather.innerHTML = het[1] + " " + random + " fok, ajánlatunk mára: " + napiMenu;
        break;
        case 2:
        showWeather.innerHTML = het[2] + " " + random + " fok, ajánlatunk mára: " + napiMenu;
        break;
        case 3:
        showWeather.innerHTML = het[3] + " " + random + " fok, ajánlatunk mára: " + napiMenu;
        break;
        case 4:
        showWeather.innerHTML = het[4] + " " + random + " fok, ajánlatunk mára: " + napiMenu;
        break;
        case 5:
        showWeather.innerHTML = het[5] + " " + random + " fok, ajánlatunk mára: " + napiMenu;
        break;
        case 6:
        showWeather.innerHTML = het[6] + " " + random + " fok, ajánlatunk mára: " + napiMenu;
        break;
        default: 
        showWeather.innerHTML = "";

    }
}

/*function Random() {
    let temp = [-1, 10, 15, 20, 25];
    let random = temp[Math.floor(Math.random()*temp.length)];
    alert(random);
}*/
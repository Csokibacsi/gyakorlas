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

    /*Random hőmérsékleti adatok generálása */
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

    
    /*Random hőmérséklet érték az adott számhoz tartozó naphoz megjeleníti*/
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

    hetiMax(temp);
    hetiMin(temp);
    hetiAvg(temp);
}

/*function Random() {
    let temp = [-1, 10, 15, 20, 25];
    let random = temp[Math.floor(Math.random()*temp.length)];
    alert(random);
}*/

function hetiMax(temp){
    let max = 0;
    for(let i=0; i<temp.length; i++){
        if(temp[i]>max){
            max = temp[i];
        }
    }
    let maxTemp = document.querySelector("span.max-temp");
    maxTemp.innerHTML = "Heti maximum: " + max;
}

function hetiMin(temp){
    let min = 0;
    for(let i=0; i<temp.length; i++){
        if(temp[i]<min){
            min = temp[i];
        }
    }
    let minTemp = document.querySelector("span.min-temp");
    minTemp.innerHTML = "Heti minimum: " + min;
}

function hetiAvg(temp){
    let all = 0;
    let avg = 0;
    for(let i=0; i<temp.length; i++){
        all += i;
    }
    avg = all/temp.length;
    let avgTemp = document.querySelector("span.avg-temp");
    avgTemp.innerHTML = "Heti átlag: " + avg;
}




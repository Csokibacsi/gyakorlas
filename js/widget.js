function weather(){
    
    let szamInput = document.querySelector("select.form-control");
    let szam = parseInt(szamInput.value);
    /*alert(szam);*/

    weekDays(szam);
}

function weekDays(szam){
    let showWeather = document.querySelector("span.show-weather");
    let het = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];

    switch(szam){
        case 0:
        showWeather.innerHTML = het[0];
        break;
        case 1:
        showWeather.innerHTML = het[1];
        break;
        case 2:
        showWeather.innerHTML = het[2];
        break;
        case 3:
        showWeather.innerHTML = het[3];
        break;
        case 4:
        showWeather.innerHTML = het[4];
        break;
        case 5:
        showWeather.innerHTML = het[5];
        break;
        case 6:
        showWeather.innerHTML = het[6];
        break;
        default: 
        showWeather.innerHTML = "";
        
    }
}
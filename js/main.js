function kiszamol(){
    let price = 1200;
    let dbInput = document.querySelector("input[name='darab']");
    let szam = parseInt(dbInput.value);
    
    /*alert("Összeg: " + osszeg);*/
    szam = isNaN(szam) ? 0 : szam;

    //let osszeg = szam * price;

    if(szam >10){
        alert("Maximum 10db lehet");
    } else if (szam <1){
        alert("Minimum 1-et kell megadni");
    } else {
        let osszeg = szam * price;
        vege.innerHTML = osszeg;
    }


   
}
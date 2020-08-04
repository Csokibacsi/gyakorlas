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

function calcAmount(){
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    //let amount = amountNumber * price;
   sumPrice(price, amountNumber);
}
function sumPrice(price, amountNumber){ 

    amountNumber = amountNumber || 0;//önmaga vagy 0
    let showAmount = document.querySelector("span.show-amount")
    if(amountNumber>10){
        alert("Max. 10db lehet");
    } else if(amountNumber<1){
        alert("Min. 1db-ot kell megadni");
    } else {
        let amount = amountNumber * price; 
        showAmount.innerHTML = amount;
    }
   
}
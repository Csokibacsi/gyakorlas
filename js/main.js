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


let alertClose = document.querySelectorAll(".close[data-dismiss='alert']");
for (let i = 0; i<alertClose.length; i++ ){
    alertClose[i].addEventListener("click", function(ev){
      //console.log(ev);
      this.parentElement.style.display = "none";
    });
} 




//Contact lista:

let users = [
    {csalad: "Nap", kereszt: "Levente", kor: "33" },
    {csalad: "Vég", kereszt: "Béla", kor: "44" },
    {csalad: "Élő", kereszt: "Flóra", kor: "22" },
    {csalad: "Cserepes", kereszt: "Virág", kor: "19" },
];

let tBody = document.querySelector("#userTable tbody");
let createTD = function(html, parent){
    let td = document.createElement("td");
    td.innerHTML = html; /*parseInt(k)+1;*/
    return parent.appendChild(td);
} 

let createButtonGroup = function(parent){
    let group = document.createElement("div");
    group.className = "btn-group";
    
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = "<i class='fas fa-sync'></i>";

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = "<i class='fas fa-sync-alt'></i>";

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for(let k in users){
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tBody.appendChild(tr);
}


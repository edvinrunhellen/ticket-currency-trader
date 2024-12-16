let moneyInTheBank = 1000000
let rate = getRate()
let bankSEK = moneyInTheBank
let bankEuro = 0;


function bank() {
    alert(`Amount in SEK: ${bankSEK.toFixed(2)}\nAmount in Euro: ${bankEuro.toFixed(2)}\nCurrent rate: ${rate.toFixed(2)} SEK/EUR`);
}

function buy() {
    const amountEuro = 1000
    const exchangeSEK = amountEuro * rate

    if (bankSEK >= exchangeSEK) {
        bankSEK -= exchangeSEK
        bankEuro += amountEuro
        alert("Buy complete")
    } else {
        alert("Not enough funds")
    }
    bank()
}

function sell() {
    const amountEuro = 1000
    const exchangeSEK = amountEuro * rate

    if (bankEuro >= amountEuro) {
        bankEuro -= amountEuro
        bankSEK += exchangeSEK
        alert("Sell complete")
    } else {
        alert("Not enough funds")
    }
    bank()
}

//setInterval(() => {
//rate = getRate(); // Uppdatera växelkursen från trader.js
//}, 1000);

//När jag trycker på köp så ska euro öka och sek minska
//Varje gång jag trycker köp så köper jag 1000 euro
//Då tas euro * getrate() och dras från sek variabeln bankSEK
//Och 1000 euro adderas på bankEuro

//När jag trycker sälj så dras 1000 euro från bankEuro och 1000 euro * getRate() adderas på bankSEK

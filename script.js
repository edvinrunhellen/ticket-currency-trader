let moneyInTheBank = 1000000
let rate = getRate()
let bankSEK = moneyInTheBank
let bankEuro = bankSEK / rate

function getRate() {
    return rate
}

function bank() {
    alert(`Amount in SEK: ${bankSEK}. Amount in Euro: ${bankEuro}`);
}

function buy() {
    const amountEuro = 1000
    const exchangeSEK = amountEuro * rate

    if (bank >= exchangeSEK) {
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

//När jag trycker på köp så ska euro öka och sek minska
//Varje gång jag trycker köp så köper jag 1000 euro
//Då tas euro * getrate() och dras från sek variabeln bankSEK
//Och 1000 euro adderas på bankEuro

//När jag trycker sälj så dras 1000 euro från bankEuro och 1000 euro * getRate() adderas på bankSEK

// skriv INTE din kod här, använd istället filen script.js

let sek = 10000;
let eur = 0;
let rate = 10; // 10 sek på 1 eur

function getRate(){
	let s = Math.round(Math.random());
	let r = Math.random();
	if(s==0){
		rate = rate + -r; // värdeminskning
	}else{
    rate = rate + r; // värdeökning
	}
	return Math.round(rate * 100)/100;
}

function startTrading(){
	setInterval(function(){
		rate = getRate();
		document.querySelector('footer>div').insertAdjacentHTML('afterbegin', '<span>' + rate + ' SEK</span>');
	}, 1000)
}
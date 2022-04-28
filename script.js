




// distanza
const distanza = Number(prompt("inserire i km da percorrere previsti"));
// età
const eta = Number(prompt("inserire anni passeggero"));
//prezzo per chilometro
const prezzoperkm = 0.21;
console.log(distanza, eta);
//sconti
const anziano = 65;
const minorenne = 18;
const scontoanziano = 0.4;
const scontominorenne = 0.2;


//stampa prezzo 

let prezzo;
if (eta >= anziano){
   prezzo = (distanza * prezzoperkm)  - (distanza * prezzoperkm * scontoanziano);
}
else if (eta < minorenne){
   prezzo = (distanza * prezzoperkm) - (distanza * prezzoperkm * scontominorenne);
}
else{
   prezzo = distanza * prezzoperkm;
}
console.log(prezzo);


//stampa prezzo decimale ? non ho più di due numeri dopo la virgola


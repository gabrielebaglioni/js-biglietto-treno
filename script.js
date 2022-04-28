// distanza
// età
//prezzo per chilometro
//sconti
//stampa prezzo 
//stampa prezzo decimale
const distanza = Number(prompt("inserire i km da percorrere previsti"));
const eta = Number(prompt("inserire anni passeggero"));
const prezzoperkm = 0.21;
console.log(distanza, eta);

const anziano = 65;
const minorenne = 18;
const scontoanziano = 0.4;
const scontominorenne = 0.2;


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


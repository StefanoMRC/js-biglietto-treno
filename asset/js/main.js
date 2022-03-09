let nomeUtente=prompt("Inserisci il tuo nome")
document.getElementById("nome").innerHTML = nomeUtente;

let cognomeUtente=prompt("Inserisci il tuo cognome")
document.getElementById("cognome").innerHTML = cognomeUtente

let kmDaPercorrere=prompt("Inserisci i chilometri da percorrere")
document.getElementById("chilometri").innerHTML = kmDaPercorrere

let eta=prompt("inserisci la tua eta")




let prezzoBiglietto= kmDaPercorrere * 0.21;
let scontoMinorenne= (prezzoBiglietto *20) / 100;
let scontoAnziani= (prezzoBiglietto *40) / 100;
let prezzoMinorenni= prezzoBiglietto-scontoMinorenne;
let prezzoAnziani=prezzoBiglietto-scontoAnziani;




if(eta >= 18 && eta <= 65) 
{
   document.getElementById("prezzo").innerHTML = (prezzoBiglietto.toFixed(2)) + " €";
   document.getElementById("sconto").innerHTML = "Intero";
}
else if(eta < 18)
{
    document.getElementById("prezzo").innerHTML = (prezzoMinorenni.toFixed(2)) + " €";
    document.getElementById("sconto").innerHTML = "Ridotto Minorenne";
}
else if(eta > 65)
{
    document.getElementById("prezzo").innerHTML = (prezzoAnziani.toFixed(2)) + " €";
    document.getElementById("sconto").innerHTML = "Ridotto Over 65";
}

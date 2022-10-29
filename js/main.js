const inputNomeEl=document.querySelector("[name='nome']");
const inputKmEl=document.querySelector("[name='km']");
const inputEtaEl=document.querySelector("[name='eta']");
const btnGeneraEl=document.querySelector('#btn-genera');
const btnAnnullaEl=document.querySelector('#btn-annulla');
const outputNomeEl=document.querySelector('#nome-output');
const outputOffertaEl=document.querySelector('#offerta-output');
const outputCarrozzaEl=document.querySelector('#carrozza-output');
const outputCpEl=document.querySelector('#cp-output');
const outputCostoEl=document.querySelector('#costo-output');
const ticketBoxEl=document.querySelector("#section-ticket");
btnGeneraEl.addEventListener("click",priceTicket);
btnAnnullaEl.addEventListener("click",svuotaTicket);

function priceTicket(){
    if(inputNomeEl.value==""){
        alert("inserisci nome e cognome");
        return;
    }
    if(inputKmEl.value==""){
        alert("inserisci Km da percorrere");
        return;
    }
    let costoBiglietto=inputKmEl.value * .21;
    outputNomeEl.innerHTML=inputNomeEl.value;
    outputOffertaEl.innerHTML="-";
    if(inputEtaEl.value == 20){
        costoBiglietto *=.8;
        outputOffertaEl.innerHTML="Under-18";
    }
    if(inputEtaEl.value == 40){
        costoBiglietto *=.6;
        outputOffertaEl.innerHTML="Over-65";
    }
    outputCostoEl.innerHTML=`${costoBiglietto.toFixed(2)} €`;
    outputCarrozzaEl.innerHTML=(Math.random() *1000).toFixed(0);
    outputCpEl.innerHTML=(Math.random() *100000).toFixed(0);
    ticketBoxEl.style.setProperty("left",0);

    
}

function svuotaTicket(){
    inputNomeEl.value="";
    inputKmEl.value="";
    outputNomeEl.innerHTML="";
    outputOffertaEl.innerHTML="";
    outputCarrozzaEl.innerHTML="";
    outputCpEl.innerHTML="";
    outputCostoEl.innerHTML="";
    ticketBoxEl.style.setProperty("left","-100%");
}




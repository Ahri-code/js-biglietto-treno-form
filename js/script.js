// Costanti

const stPrice = 0.21;

// Variabili

let distanza;
let eta;
let price;
let discount;

// inputs

distanza = prompt("Inserisci i chilometri che si intende percorrere");

distanza = parseInt(distanza);

eta = prompt("Inserisci l'età del passeggero");

eta = parseInt(eta);

// checks

if (isNaN(distanza) && isNaN(eta)) {
    document.getElementById("title").innerText = `Errore, per favore ricarica la pagina e inserisci un numero come risposta alle domande`;
}
else if (isNaN(distanza)) {
    document.getElementById("title").innerText = `Errore, per favore ricarica la pagina e inserisci un numero alla domanda sulla distanza`;
}
else if (isNaN(eta)) {
    document.getElementById("title").innerText = `Errore, per favore ricarica la pagina e inserisci un numero alla domanda sull'età`;
}
else {
    price = stPrice * distanza;

    if (eta < 17) {
        discount = price * 20 / 100;
        price = price - discount;
    }
    else if (eta > 64) {
        discount = price * 40 / 100;
        price = price - discount;
    }

    if (!Number.isInteger(price)) {
        price = price.toFixed(2);
        price = parseFloat(price);
    }

    document.getElementById("title").innerText = `Il prezzo del biglietto è: ${price}€`;
    if (eta < 17) {
        document.getElementById("disc").innerText = `È stato applicato uno sconto del 20%`;
    }
    else if (eta > 64) {
        document.getElementById("disc").innerText = `È stato applicato uno sconto del 40%`;
    }

}
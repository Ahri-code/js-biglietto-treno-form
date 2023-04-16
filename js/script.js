// Costanti

const stPrice = 0.21;

// Variabili

let distanza;
let eta;
let price;
let discount;

// functions

function load () {
    distanza = document.getElementById("distance").value;

    distanza = parseInt(distanza);

    eta = document.getElementById("age_sel").value;

    if (isNaN(distanza)) {

    }

    console.log(distanza);
    console.log(eta);
}
// else {

    // price = stPrice * distanza;

    // if (eta < 17) {
    //     discount = price * 20 / 100;
    //     price = price - discount;
    // }
    // else if (eta > 64) {
    //     discount = price * 40 / 100;
    //     price = price - discount;
    // }

    // if (!Number.isInteger(price)) {
    //     price = price.toFixed(2);
    //     price = parseFloat(price);
    // }

// }
// --- CONSTANTS ---

const stPrice = 0.21;

// --- VARIABLES ---

let people;
let distanza;
let eta;
let price;
let discount;

// --- FUNCTIONS ---

// Load function

function load () {
    people = document.getElementById("name").value;

    distanza = document.getElementById("distance").value;

    distanza = parseInt(distanza);

    eta = document.getElementById("age_sel").value;

    if ((isNaN(distanza) && eta === "" && people ==="") || (eta === "" && people ==="") || (isNaN(distanza) && eta === "") || (isNaN(distanza) && people ==="")) {
        alert("Non sono stati inseriti tutti i dati");
    }
    else if (people === "") {
        alert("Non è stato inserito un nome");
    }
    else if (isNaN(distanza)) {
        alert("Non è stata inserita la distanza");
    }
    else if (eta === "") {
        alert("Non è stata inserita una fascia d'età");
    }
    else {
        price = stPrice * distanza;

        if (eta === "minorenne") {
            discount = price * 20 / 100;
            price = price - discount;
        }
        else if (eta === "over-65") {
            discount = price * 40 / 100;
            price = price - discount;
        }

        if (!Number.isInteger(price)) {
            price = price.toFixed(2);
            price = parseFloat(price);
        }
    }

    console.log(distanza);
    console.log(eta);
    console.log(price)
}

// Undo function

function undo() {
    people = document.getElementById("name");
    distanza = document.getElementById("distance");
    eta = document.getElementById("age_sel");
    people.value = '';
    distanza.value = '';
    eta.value = '';
}
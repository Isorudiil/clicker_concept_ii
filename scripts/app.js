let currencies = {
    copper: 0,
    silver: 0,
    gold: 0,
    platinum: 0,
    diamond: 0,
}

let currenciesContainer = document.getElementById("currency-container");

function addValueToCurrency(currencyAmount, currencyName) {
    currencyAmount += 1;
    console.log(currencyName);
    document
        .getElementById(`${currencyName}-span`)
        .textContent = currencyAmount;
    return currencyAmount;
}

currenciesContainer
    .addEventListener("click", function (event) {
        if (event.target.dataset.currency in currencies) {
            // currencies[event.target.dataset.currency];
            currencies[event.target.dataset.currency] = addValueToCurrency(currencies[event.target.dataset.currency], event.target.dataset.currency);
        }
    })


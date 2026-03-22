import { getElement, showAssets } from "./view.js";
import { currencies, addValueToAsset } from "./model.js";

getElement("#currency-container")
    .addEventListener("click", (e) => {
        const currentCurrency = e.target.dataset.currency;
        addValueToAsset(currencies, currentCurrency, 1);
        showAssets(currencies);
    });

getElement(".assets-container")
    .addEventListener("click", (e) => {
        getElement(".assets-list")
            .classList.toggle("hide");
    });

showAssets(currencies);
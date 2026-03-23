import { getElement, showAssets } from "./view.js";
import { resources,
  resourceBuildings,
  resourceGenerators,
  adjustAssetAmount,
  saveAssets,
} from "./model.js";

getElement("#resource-container")
    .addEventListener("click", (e) => {
        const currentCurrency = e.target.dataset.resource;
        adjustAssetAmount(resources, currentCurrency, 1);
        showAssets(resources);
    });

getElement(".assets-container")
    .addEventListener("click", (e) => {
        getElement(".assets-list")
            .classList.toggle("hide");
    });

showAssets(resources);
saveAssets({resources, resourceBuildings, resourceGenerators});

getElement("#shop-button")
    .addEventListener("click", (e) => {
      getElement("#shop-modal")
        .classList.toggle("show");
    })

getElement(".modal-close")
    .addEventListener("click", (e) => {
      getElement("#shop-modal")
        .classList.toggle("show");
    })


export function getElement(selector) {
    return document.querySelector(selector);
}

export function showAssets(assets) {
    const node = getElement("#assets");
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
    Object.entries(assets).forEach(([asset, value]) => {
        if (value["active"]) {
            let newDiv = document.createElement("div");
            newDiv.textContent = `${_capitalizeFirstLetter(asset)}: ${value["amount"]}`;
            node
              .appendChild(newDiv);
        }
    });
}

function _capitalizeFirstLetter(string) {
    if (string.length === 0) {
        return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}
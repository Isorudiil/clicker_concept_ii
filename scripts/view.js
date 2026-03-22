export function getElement(selector) {
    return document.querySelector(selector);
}

export function showAssets(assets) {
    const node = getElement("#assets");
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
    Object.entries(assets).forEach(([asset, value]) => {
        let newDiv = document.createElement("div");
        newDiv.textContent = `${asset}: ${value["amount"]}`;
        node
            .appendChild(newDiv);
    });
}
export let resources = {
    trees: {
        amount: 0, active: true,
    },
    rocks: {
        amount: 0, active: false,
    },
    coal: {
        amount: 0, active: false,
    },
    copper: {
        amount: 0, active: false,
    },
    diamond: {
        amount: 0, active: false,
    }
};

export let resourceBuildings = {
    workbench: {
        amount: 0, active: false,
    },
    lumberyard: {
        amount: 0, active: false,
    },
    quarry: {
        amount: 0, active: false,
    },
};

export let resourceGenerators = {
    lumberjack: {
        amount: 0, active: false,
    },
    miner: {
        amount: 0, active: false,
    },
};

export function adjustAssetAmount(assets, asset, val) {
    if (asset in assets) {
        if (val > 0) {
            assets[asset].amount += val;
        } else {
            assets[asset].amount -= val;
        }
    }
}

export function saveAssets(assets) {
    localStorage.setItem("assets", JSON.stringify(assets));
}
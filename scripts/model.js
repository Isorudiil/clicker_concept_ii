export let currencies = {
    copper: {
        amount: 0, active: true,
    },
    silver: {
        amount: 0, active: false,
    },
    gold: {
        amount: 0, active: false,
    },
    platinum: {
        amount: 0, active: false,
    },
    diamond: {
        amount: 0, active: false,
    }
};

export function addValueToAsset(assets, asset,  val) {
    if (asset in assets) {
        assets[asset].amount += val;
    }
}
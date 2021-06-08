const cartString = localStorage.getItem('cart');
const cart = cartString === null ? {} : JSON.parse(cartString);
const onCartChangedListeners = [];

function addItems(itemInfo, quantity) {
    if (cart[itemInfo.name]) {
        cart[itemInfo.name].quantity += Number(quantity);
    } else {
        cart[itemInfo.name] = itemInfo;
        cart[itemInfo.name].quantity = Number(quantity);
    }
    onCartChanged();
}

function clearItem(itemName) {
    delete cart[itemName];
    onCartChanged();
}

function clearCart() {
    Object.keys(cart).forEach(item => {
        delete cart[item];
    });
    onCartChanged();
}

function getCart() {
    return Object.assign(cart)
}

function addCartListener(callback) {
    onCartChangedListeners.push(callback);
}

function onCartChanged() {
    localStorage.setItem('cart', JSON.stringify(cart));
    onCartChangedListeners.forEach(cb => cb());
}

export {addItems, clearCart, getCart, clearItem, addCartListener, onCartChanged};
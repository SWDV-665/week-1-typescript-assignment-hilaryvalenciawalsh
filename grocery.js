var Item = /** @class */ (function () {
    function Item(name, cost, howMany) {
        this.name = name;
        this.cost = cost;
        this.howMany = howMany;
        this.item = name + " " + cost + " " + howMany;
    }
    return Item;
}());
function itemInfo(item) {
    return item.name + " " + item.cost + " " + item.howMany;
}
var cart = [new Item("Oatmilk", "5.99", "100"), new Item("Yogurt", "4.50", "100"), new Item("Eggs", "9.99", "200")];

function printbasket(cart) {
    for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
        var i = cart_1[_i];
        itemInfo(i);
    }
    return cart;
}
document.body.textContent = printbasket(cart);

class Item {
  item: string;
  constructor(public name: string, public cost: string, public howMany: string) {
    this.item = name + " " + cost + " " + howMany;
  }
}

interface Item {
  name: string;
  cost: string;
  howMany: string;
}

function itemInfo(item: Item) {
  return item.name + " " + item.cost + " " + item.howMany;
}

let basket = [
  new Item("Oatmilk", "5.99", "100"),
  new Item("Yogurt", "4.50", "100"),
  new Item("Eggs", "9.99", "200"),
];

function printbasket(basket) {
  for (let i of basket) {
    itemInfo(i);
  }
  return basket;
}

document.body.textContent = printbasket(basket);

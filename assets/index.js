products = [{}];

const card = () => {
  return `<div>hello</div>`;
};

const wrapper = document.querySelector(".container");
let cards = "";

products.forEach((item) => {
  cards = cards + card(item);
});

wrapper.innerHTML = cards;

var card1 = [{ title, image, rating, inStore, weight, price, oldPrice }];
var card2 = [{ title, image, rating, inStore, weight, price, oldPrice }];
var card3 = [{ title, image, rating, inStore, weight, price, oldPrice }];
var card4 = [{ title, image, rating, inStore, weight, price, oldPrice }];
var card5 = [{ title, image, rating, inStore, weight, price, oldPrice }];
var card6 = [{ title, image, rating, inStore, weight, price, oldPrice }];
var
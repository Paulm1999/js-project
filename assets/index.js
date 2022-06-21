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

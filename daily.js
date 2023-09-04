let shopp = document.getElementById('products');

const shoppItem = [
  {
    id: 'ad',
    name: 'Adejoke',
    desc: 'Wedding gown',
    price: 220,
    img: 'images/wed.png',
  },
  {
    id: 'mar',
    name: 'Alade',
    desc: 'Children gown',
    price: 70,
    img: 'images/wed.png',
  },
  {
    id: 'ayan',
    name: 'Head warmer',
    desc: 'Fluffy warmer',
    price: 10,
    img: 'images/wed.png',
  },
  {
    id: 'ige',
    name: 'Cardigan',
    desc: 'Cardigan dress',
    price: 110,
    img: 'images/wed.png',
  },
];

let bask = [];

let generateShopp = () => {
  return (shopp.innerHTML = shoppItem
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
        <div id=product-id-${id} class="product-items">
            <img src=${img} alt="" class="image-item"/>
            <p class="nn">${name}</p>
            <div class="desc">
              <p>${desc}</p>
              <p class="nn">$ ${price}</p>
            </div>
            <div class="addcart">
              <p>Free Shipping</p>
              <i class="bi bi-cart-plus" onclick="increment(${id})"></i>
            </div>
          </div>
        `;
    })
    .join(''));
};
generateShopp();

// let increment = (id) => {
//   let selectedItem = id;

//   let search = basket.find((x) => x.id === selectedItem.id);

//   if (search === undefined) {
//     basket.push({
//       id: selectedItem.id,
//       item: 1,
//     });
//   } else {
//     search.item += 1;
//   }
//   update(selectedItem.id);
// };

// let update = (id) => {
//   let search = basket.find((x) => x.id === id);
//   let cart = document.getElementById('cartlist');
//   cart.innerHTML = search.item;
//   // calculation();
// };

// let calculation = () => {
//   let cart = document.getElementById('cartlist');
//   cart.innerHTML = 100;
// };

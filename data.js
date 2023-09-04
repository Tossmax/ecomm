let shop = document.getElementById('product');

const shopItem = [
  {
    id: 'wer',
    name: 'Samsung s10+ 16G',
    desc: '128G',
    price: 213,
    img: 'images/gown.png',
  },
  {
    id: 'werty',
    name: 'Samsung s10+ 16G',
    desc: '128G',
    price: 213,
    img: 'images/gown.png',
  },
  {
    id: 'werhg',
    name: 'Samsung s10+ 16G',
    desc: '128G',
    price: 213,
    img: 'images/gown.png',
  },
  {
    id: 'werloy',
    name: 'Samsung s10+ 16G',
    desc: '128G',
    price: 213,
    img: 'images/gown.png',
  },
];

let basket = [];

let generateShop = () => {
  return (shop.innerHTML = shopItem
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
generateShop();

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

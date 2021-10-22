/*
Requirements:
- Layout: same as all other apps
- do not ammend index.html body
- Write all code in this file

Features:
- display
  - user sees a grid of items
  - each item has an image of the item, price, 'buy' button
  - buy button => adds item to cart
- in options
  - cart button innerHTML = Cart: $0.00
  - as you add to your cart, update innerHTML to reflect total value of the cart
  - clicking cart button => replace display wiht items in the cart
    - cart button => 'Back to Shop'
    - when clicked again, flips back to original text
  - Checkout button in shoppint cart that just clears the cart! - maybe display an alert/message

Out of Scope
- backend persists and serces shop items
- not process cart, sign up users, etc.

Stack:
- HTML, CSS, JS => test using local storage
- in production => DB (document based, NoSQL), backend - serves us the items (serverless), image storage (AWS S3)

To-Do:
- Research
- Formulate a plan
  - database: MongoDB
  - backend
- Implement
*/


const shopItems = [{ image: 'img.png', name: 'Item 1', price: 5.00 },
              { image: 'img.png', name: 'Item 2', price: 1.50 },
              { image: 'img.png', name: 'Item 3', price: 3.00 },
              { image: 'img.png', name: 'Item 4', price: 2.50 },
              { image: 'img.png', name: 'Item 5', price: 3.00 },
              { image: 'img.png', name: 'Item 6', price: 4.00 },
];

const inCart = [];

const generateShop = () => {
  // State variables
  let total = 0.00;

  const localStorage = window.localStorage;

  // create shop
  const shopDisplay = document.createElement('div');
  shopDisplay.id = 'shop-display';
  shopDisplay.style.border = `5px solid ${appList[0].color}`;

  // Cart button
  const cartButton = document.createElement('button');
  cartButton.id = 'cart-Button';
  cartButton.style.backgroundColor = appList[0].color;
  cartButton.onclick = () => toggleDisplay();

  const addToCart = (item) => {
    total += item.price;
    cartButton.innerHTML = `Cart: $${total}`;

    inCart.push(item);
    localStorage.setItem('items', JSON.stringify(inCart));
  };

  const displayItems = () => {
    cartButton.innerHTML = `Cart: $${total}`;

    shopItems.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList = 'item-div'
      const img = document.createElement('img');
      img.src = item.image;
      itemDiv.append(img);

      const nameP = document.createElement('p');
      nameP.innerHTML = item.name;
      itemDiv.append(nameP);

      const priceP = document.createElement('p');
      priceP.innerHTML = `$${item.price}`;
      itemDiv.append(priceP);

      const buyButton = document.createElement('button');
      buyButton.innerHTML = 'Buy';
      buyButton.onclick = () => addToCart(item);
      itemDiv.append(buyButton);

      shopDisplay.append(itemDiv);
    });
  };

  displayItems();

  const displayCart = () => {
    cartButton.innerHTML = 'Back to shop';

    shopDisplay.innerHTML = '';
  };

  const toggleDisplay = () => {
    if (cartButton.innerHTML.includes('Cart: $')) {
      displayCart();
    } else {
      displayItems();
    }
  };

  display.append(shopDisplay);
  options.append(cartButton);
}

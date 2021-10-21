/*
Requirements

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

Research:
-
*/

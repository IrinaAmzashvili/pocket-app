
let makeArt = () => {
  // this is available on canvas (can also do 3d):
  const pocketArt = document.getElementById('pocketart');
  const context = pocketArt.getContext('2d');

  for (let x = 0; x < 255; x++) {
    for (let y = 0; y < 255; y++) {
      // if ((x * y) % 255) {
        // context.fillRect(x * 4, y * 4, 4, 4);
        // context.fillStyle = `rgb(${x}, ${y}, 100)` // this color scheme
        // context.fillStyle = `rgb(${(x / y) % 255}, ${(x - y) % 255}, 100)`
        // context.fillStyle = `rgb(${x}, ${y}, ${(x * y) % 255}`
      // }
      if ((x ^ y) % 5) {
        context.fillRect(x * 4, y * 4, 4, 4);
        context.fillStyle = `rgb(${x}, ${y}, 100)`
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', makeArt);

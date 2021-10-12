const makeArt = () => {
  // const pocketArt = document.getElementById('pocket-art');
  const pocketArt = document.createElement('canvas');
  pocketArt.id = 'pocket-art';
  pocketArt.height = '500';
  pocketArt.width = '500';
  pocketArt.style.border = '2px solid black'
  pocketArt.style.background = 'white';

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

  const display = document.getElementById('display');
  display.append(pocketArt);
}

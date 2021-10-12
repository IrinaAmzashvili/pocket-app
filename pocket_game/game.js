/*
Additions:
- snek can't go in opposite direction of where it's currently going
- score
- high score
- message displayed before game starts
- message displayed when snek runs into its tail
*/

const generateGame = () => {
  canvas = document.createElement("canvas");
  canvas.id = "game";
  canvas.width = '500';
  canvas.height = '500';

  const display = document.getElementById('display');
  display.append(canvas);
  // initial state for the game
  // they are equal to each other, any change to one happens to the other
  px = py = 10; // head - used to reference every segment
  gs = ts = 20; // game boundaries -> size of playable area - number of pixels in each square
  ax = ay = 15; // apple

  // only values manipulated by our keys (directional values)
  xv = yv = 0; // x value and y value coordinates

  body = []; // entire body, each segment: { x: px, y: py }
  segments = 5; // segments of snake's body

  // logic for game
  const game = () => {
    let gameScore = document.getElementById("game-score");
    gameScore.innerHTML = `${segments - 5}`;
    let highScore = document.getElementById("high-score");

    if (+gameScore.innerHTML > +highScore.innerHTML) {
      highScore.innerHTML = `${gameScore.innerHTML}`;
    }

    px += xv;
    py += yv;

    // game background
    context.fillStyle = "#0c1a29";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // snek color
    context.fillStyle = "#49c86f";

    // reset if snek comes off edge of board
    if (px < 0) px = ts - 1;
    if (px > ts - 1) px = 0;
    if (py < 0) py = ts - 1;
    if (py > ts - 1) py = 0;

    for (let i = 0; i < body.length; i++) {
      context.fillRect(body[i].x * gs, body[i].y * gs, gs - 2, gs - 2);
      // if head intersepts any segment of the body, reset segments to 5
      if (body[i].x === px && body[i].y === py) {
        segments = 5;
        if (px !== 10 && py !== 10) {
          const failedMessage = document.getElementById("failed-message");
          failedMessage.removeAttribute("hidden");
          setTimeout(() => {
            failedMessage.setAttribute("hidden", "true");
          }, 2000);
        }
      }
    }

    // on initial render, push in the head of the snek
    body.push({ x: px, y: py });

    // if we reset back to 5 segments, knock off the rest of the segments
    while (body.length > segments) {
      body.shift();
    }

    // eating
    // if head finds apple, are occupying the same space
    if (ax === px && ay === py) {
      // add onto the body
      segments++;
      // set new apple somewhere else
      ax = Math.floor(Math.random() * ts);
      ay = Math.floor(Math.random() * ts);
    }

    // apple
    context.fillStyle = "#ff5353";
    context.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
  };

  // control our D-Pad
  const keyDown = (e) => {
    const instructions = document.getElementById("instructions");
    switch (e.keyCode) {
      case 65:
      case 37:
        // hides message
        instructions.setAttribute("hidden", "true");
        // can't go in the opposite direction
        if (xv === 1) break;
        xv = -1;
        yv = 0;
        break;
      case 87:
      case 38:
        instructions.setAttribute("hidden", "true");
        if (yv === 1) break;
        xv = 0;
        yv = -1;
        break;
      case 68:
      case 39:
        instructions.setAttribute("hidden", "true");
        if (xv === -1) break;
        xv = 1;
        yv = 0;
        break;
      case 83:
      case 40:
        instructions.setAttribute("hidden", "true");
        if (yv === -1) break;
        xv = 0;
        yv = 1;
        break;
    }
  };

  context = canvas.getContext("2d");
  document.addEventListener("keydown", keyDown);
  setInterval(game, 100);
};

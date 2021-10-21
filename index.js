const appList = Object.values(apps);

const appName = document.getElementById("app-name");
const options = document.getElementById("options");
const display = document.getElementById("display");

const cleanUp = () => {
  document.body.style.backgroundColor = '#FFFFFF';
  document.body.style.color = '#000000';
  display.innerHTML = "";
  options.innerHTML = '';

  const clickable = document.querySelectorAll('.clickable-dark')
  clickable.forEach(el => {
    el.classList.remove('clickable-dark');
    el.classList.add('clickable');
  });
};

const render = (appName) => {
  cleanUp();
  switch (appName) {
    case "math":
      generateMath();
      break;
    case "shop":
      generateShop();
      break;
    case "notes":
      generateNotes();
      break;
    case "game":
      generateGame();
      break;
    case "art":
      generateArt();
      break;
    case "grave":
      generateGrave();
      break;
  }
};

const setDisplay = () => {
  let selectedApp = appList[0];
  appName.innerHTML = selectedApp.name;
  appName.style.color = selectedApp.color;
  render(selectedApp.name);
};

const rotateRight = () => {
  appList.push(appList.shift());
  // apps[0] === 'grave' ? toggleDark() : toggleLight();
  setDisplay();
};

const rotateLeft = () => {
  appList.unshift(appList.pop());
  // apps[0] === 'grave' ? toggleDark() : toggleLight();
  setDisplay();
};

// const keyDown = (e) => {
//   console.log(e.keyCode)
//   switch (e.keyCode) {
//     case 37:
//       rotateLeft();
//       break;
//     case 39:
//       rorateRight();
//       break;
//   }
// };

// document.addEventListener("keyDown", keyDown);
document.getElementById("right-button").onclick = rotateRight;
document.getElementById("left-button").onclick = rotateLeft;


// document.addEventListener('DOMContentLoaded', () => {
//   generateMath();
// });

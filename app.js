const apps = [
  'app',
  'blog',
  'shop',
  'note',
  'game',
  'art',
  'grave',
];

const appName = document.getElementById('app-name');
// appName.innerText = apps[0];
const clickable = document.querySelectorAll('.clickable')

const options = document.getElementById('options');
const display = document.getElementById('display');

const cleanUp = () => {
  display.innerHTML = '';
}

const setDisplay = () => {
  let selectedApp = apps[0];
  appName.innerHTML = selectedApp;
  appName.style.color = '#4dd0e1';
  if (selectedApp === 'art') {
    cleanUp();
    makeArt();
  } else if (selectedApp === 'game') {
    cleanUp();
    initGame();
  } else {
    cleanUp();
  }
}

// const toggleDark = () => {
//   document.body.style.backgroundColor = '#000000';
//   document.body.style.color = 'grey';
//   appName.style.color = 'purple';
//   clickable.forEach(el => {
//     el.classList.remove('clickable');
//     el.classList.add('clickable-dark');
//   });
// };

// const toggleLight = () => {
//   document.body.style.backgroundColor = '#FFFFFF';
//   document.body.style.color = '#000000';
//   appName.style.color = '#4dd0e1';
//   clickable.forEach(el => {
//     el.classList.remove('clickable-dark');
//     el.classList.add('clickable');
//   });
// };

const rotateRight = () => {
  apps.push(apps.shift());
  // appName.innerText = apps[0];
  // apps[0] === 'grave' ? toggleDark() : toggleLight();
  // return apps;
  setDisplay();
};

const rotateLeft = () => {
  apps.unshift(apps.pop());
  // appName.innerText = apps[0];
  // apps[0] === 'grave' ? toggleDark() : toggleLight();
  // return apps;
  setDisplay();
};

document.getElementById('right-button').onclick = rotateRight;
document.getElementById('left-button').onclick = rotateLeft;

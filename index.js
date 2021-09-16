const apps = [
  'app',
  'blog',
  'shop',
  'note',
  'game',
  'graveyard',
];

let appName = document.getElementById('app-name');
appName.innerText = apps[0];

const toggleDark = () => {
  document.body.style.backgroundColor = '#000000';
  document.body.style.color = '#FFFFFF';
  appName.style.color = 'purple';
};

const toggleLight = () => {
  document.body.style.backgroundColor = '#FFFFFF';
  document.body.style.color = '#000000';
  appName.style.color = 'teal';
};

const rotateRight = () => {
  apps.push(apps.shift());
  appName.innerText = apps[0];
  apps[0] === 'graveyard' ? toggleDark() : toggleLight();
  return apps;
};

const rotateLeft = () => {
  apps.unshift(apps.pop());
  appName.innerText = apps[0];
  return apps;
};

document.getElementById('right-button').onclick = rotateRight;
document.getElementById('left-button').onclick = rotateLeft;

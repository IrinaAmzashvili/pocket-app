const apps = [
  'app',
  'blog',
  'shop',
  'note',
  'game',
  'art',
  'grave',
];

let appName = document.getElementById('app-name');
appName.innerText = apps[0];
const clickable = document.querySelectorAll('.clickable')

const toggleDark = () => {
  document.body.style.backgroundColor = '#000000';
  document.body.style.color = 'grey';
  appName.style.color = 'purple';
  clickable.forEach(el => {
    el.classList.remove('clickable');
    el.classList.add('clickable-dark');
  });
};

const toggleLight = () => {
  document.body.style.backgroundColor = '#FFFFFF';
  document.body.style.color = '#000000';
  appName.style.color = 'teal';
  clickable.forEach(el => {
    el.classList.remove('clickable-dark');
    el.classList.add('clickable');
  });
};

const rotateRight = () => {
  apps.push(apps.shift());
  appName.innerText = apps[0];
  apps[0] === 'grave' ? toggleDark() : toggleLight();
  return apps;
};

const rotateLeft = () => {
  apps.unshift(apps.pop());
  appName.innerText = apps[0];
  apps[0] === 'grave' ? toggleDark() : toggleLight();
  return apps;
};

document.getElementById('right-button').onclick = rotateRight;
document.getElementById('left-button').onclick = rotateLeft;

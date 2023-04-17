import changePosition from './movement';

const goblinImg = document.createElement('img');
goblinImg.src = 'https://raw.githubusercontent.com/AplusIv/ahj-homeworks/simplification/dom/pic/goblin.png';
goblinImg.alt = 'Goblin pic';

const holes = document.querySelectorAll('.hole');

let previousPosition;

setTimeout(changePosition, 2000, previousPosition, holes, goblinImg);

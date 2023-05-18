import GameField from './gameField';
import movingHandler from './movement';

const goblinImg = document.createElement('img');
goblinImg.src = 'https://raw.githubusercontent.com/AplusIv/ahj-homeworks/simplification/dom/pic/goblin.png';
goblinImg.alt = 'Goblin pic';

const gameField = new GameField('container', 15, goblinImg, movingHandler);
console.log(gameField);
gameField.renderField();
gameField.renderImg();

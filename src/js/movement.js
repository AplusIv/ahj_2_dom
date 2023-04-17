function getRandom() {
  const position = Math.round(Math.random() * 15);
  return position;
}

export default function changePosition(previous, positions, img) {
  try {
    console.log(previous);
    let newPosition = previous;
    console.log(`Предыдущая позиция - ${newPosition}`);

    const randomPosition = getRandom();
    if (randomPosition === previous) {
      throw new Error('Одинаковые позиции недопустимы');
    }
    console.log(randomPosition);
    for (const position of positions) {
      if (position.dataset.position === String(randomPosition)) {
        position.appendChild(img);

        newPosition = randomPosition;
        console.log(`А теперь позиция такая - ${newPosition}`);
      }
    }
    setTimeout(changePosition, 2000, newPosition, positions, img);
  } catch (error) {
    console.log(error);
    changePosition(previous, positions, img);
  }
}

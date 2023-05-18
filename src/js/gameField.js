export default class GameField {
  constructor(element, fieldHolesNumber, img, movingHandler) {
    if (typeof element === 'string') {
      const containerElement = document.createElement('ul');
      containerElement.classList = element;
      this.element = containerElement;
    }

    this.fieldHolesNumber = fieldHolesNumber;
    this.imgElement = img;

    this.movingHandler = movingHandler;
    this.holes = element.children;
  }

  renderField() {
    for (let i = 0; i <= this.fieldHolesNumber; i += 1) {
      const hole = document.createElement('li');
      hole.classList = 'hole';
      hole.dataset.position = i;

      this.element.appendChild(hole);
    }
    document.body.insertBefore(this.element, document.querySelector('h1').nextElementSibling);
  }

  renderImg() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(
      () => this.movingHandler(this.element.children, this.imgElement),
      2000,
    );
  }

  removeImg(hole) {
    this.imgElement = hole.removeChild(this.imgElement);
  }

  getRandom() {
    const position = Math.round(Math.random() * this.fieldHolesNumber);
    return position;
  }

  getNewPosition() {
    const newPosition = this.getRandom();
    if (newPosition === this.previous) {
      console.log(`Одинаковые this.getRandom() = ${newPosition} и this.previous = ${this.previous}, повторям рандом`);
      return this.getNewPosition();
    }
    console.log(`возвращаю ${newPosition} позицию для отрисовки в новом месте`);
    return newPosition;
  }
}

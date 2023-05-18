export default function movingHandler(positions, img) {
  this.newRandomPosition = this.getNewPosition();

  for (const position of positions) {
    if (position.dataset.position === String(this.newRandomPosition)) {
      position.appendChild(img);

      this.previous = this.newRandomPosition;
    }
  }
}

/* ??? В лекциях лектор создаёт свойства в классах вида this._interval, this._element.
Почему? Ведь на них сразу ругается линтер (Unexpected dangling '_'), зачем так делается?
Как студент должен выкручиваться из этого?

У меня сразу идёт недоверие к материалу или себе, что я что-то не так делаю.
Стандартные настройки линтера не менял */

/* ??? Или также в лекции идёт перезаписывание входящих параметров,
как тут (element = document.querySelector(element)
Линтер ругается (Assignment to function parameter 'element'.eslintno-param-reassign))
И это я не придумываю ничего с настройкой. Что с этим делать, может, я что-то не понимаю.
Почему нас так учат, если на это сразу ругается линтер?

class FilterWidget {
  constructor(element, filterHandler) {
      if(typeof element === 'string') {
          element = document.querySelector(element);
      }

      this._filterText = document.querySelector('.filter-text')

      this._filterHandler = filterHandler;
      this.onFilter = this.onFilter.bind(this);
      this._element = element;

      this._filterText.addEventListener('input', this.onFilter);
  }
  */

import {Component} from "./component";

export class TaskEdit extends Component {
  constructor(data) {
    super();
    this._title = data.titles;
    this._dueDate = data.dueDate;
    this._tags = data.tags;
    this._picture = data.picture;
    this._color = data.colors;
    this._repeatingDays = data.repeatingDays;
    this._isDone = data.isDone;
    this._isFavorite = data.isFavorite;
    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);

    this._onSubmit = null;
  }

  _isRepeated() {
    return Object.values(this._repeatingDays).some((it) => it === true);
  }

  _onSubmitButtonClick(evt) {
    evt.preventDefault();
    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get template() {
    return `
    <article class="card card--edit card--${this._color} 
    ${this._isDone && +this._dueDate < Date.now() ? `card--deadline` : ``} 
    ${this._isRepeated() ? `card--repeat` : ``}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites${this._isFavorite ? `` : ` card__btn--disabled`}"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
              >${this._title}</textarea>
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: <span class="card__date-status">no</span>
                </button>

                <fieldset class="card__date-deadline" disabled>
                  <label class="card__input-deadline-wrap">
                    <input
                      class="card__date"
                      type="text"
                      placeholder="${this._dueDate.toLocaleString(`ru`, {month: `long`, day: `numeric`})}"
                      name="date"
                    />
                  </label>
                  <label class="card__input-deadline-wrap">
                    <input
                      class="card__time"
                      type="text"
                      placeholder="${this._dueDate.toLocaleString(`ru`, {month: `long`, day: `numeric`})}"
                      name="time"
                    />
                  </label>
                </fieldset>

                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">no</span>
                </button>

                <fieldset class="card__repeat-days">
                  <div class="card__repeat-days-inner">
                ${
  Object.keys(this._repeatingDays).reduce((prev, it) => {
    return prev + `
                    <input
                      class="visually-hidden card__repeat-day-input"
                      type="checkbox"
                      id="repeat-${it}-5"
                      name="repeat"
                      value="${it}"
                      ${this._repeatingDays[it] ? `checked` : ``}
                    />
                  <label class="card__repeat-day" for="repeat-${it}-5">${it}</label>`;
  }, ``)
}
                  </div>
                </fieldset>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                  ${
  [...this._tags].reduce((prev, it) => {
    return prev + `
                      <span class="card__hashtag-inner">
                        <input
                          type="hidden"
                          name="hashtag"
                          value="repeat"
                          class="card__hashtag-hidden-input"
                        />
                        <button type="button" class="card__hashtag-name">
                        #${it}
                        </button>
                        <button type="button" class="card__hashtag-delete">
                          delete
                        </button>
                      </span>`;
  }, ``)
}
                </div>

                <label>
                  <input
                    type="text"
                    class="card__hashtag-input"
                    name="hashtag-input"
                    placeholder="Type new hashtag here"
                  />
                </label>
              </div>
            </div>

            <label class="card__img-wrap card__img-wrap--empty">
              <input
                type="file"
                class="card__img-input visually-hidden"
                name="img"
              />
              <img
                src="${this._picture}"
                alt="task picture"
                class="card__img"
              />
            </label>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                <input
                  type="radio"
                  id="color-black-5"
                  class="card__color-input card__color-input--black visually-hidden"
                  name="color"
                  value="black"
                />
                <label
                  for="color-black-5"
                  class="card__color card__color--black"
                  >black</label
                >
                <input
                  type="radio"
                  id="color-yellow-5"
                  class="card__color-input card__color-input--yellow visually-hidden"
                  name="color"
                  value="yellow"
                />
                <label
                  for="color-yellow-5"
                  class="card__color card__color--yellow"
                  >yellow</label
                >
                <input
                  type="radio"
                  id="color-blue-5"
                  class="card__color-input card__color-input--blue visually-hidden"
                  name="color"
                  value="blue"
                />
                <label
                  for="color-blue-5"
                  class="card__color card__color--blue"
                  >blue</label
                >
                <input
                  type="radio"
                  id="color-green-5"
                  class="card__color-input card__color-input--green visually-hidden"
                  name="color"
                  value="green"
                  checked
                />
                <label
                  for="color-green-5"
                  class="card__color card__color--green"
                  >green</label
                >
                <input
                  type="radio"
                  id="color-pink-5"
                  class="card__color-input card__color-input--pink visually-hidden"
                  name="color"
                  value="pink"
                />
                <label
                  for="color-pink-5"
                  class="card__color card__color--pink"
                  >pink</label
                >
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>
	`.trim();
  }

  bind() {
    this._element.querySelector(`.card__form`)
        .addEventListener(`submit`, this._onSubmitButtonClick);
  }

  unbind() {
    this._element.querySelector(`.card__form`)
        .removeEventListener(`submit`, this._onSubmitButtonClick);
  }
}

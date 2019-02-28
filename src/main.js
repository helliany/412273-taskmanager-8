import {FILTERS, CARD_NUMBER} from './data';
import {getFilterElement} from "./make-filter";
import {getCardElement} from "./make-card";

const main = document.querySelector(`.main`);
const searchWrapper = document.querySelector(`.statistic`);
const loadBtn = document.querySelector(`.load-more`);
const board = document.querySelector(`.board`);

const randomizeCards = (n) => {
  const TasksWrapper = document.querySelector(`.board__tasks`);
  board.removeChild(TasksWrapper);
  renderCards(n);
};

const renderFilters = () => {
  const section = document.createElement(`section`);
  section.className = `main__filter filter container`;
  FILTERS.forEach((filter) => {
    const count = getRandomNumber();
    section.insertAdjacentHTML(`beforeend`, getFilterElement(filter.id, count, filter.disabled, filter.checked));
    const input = section.querySelector(`.filter__input:last-of-type`);
    input.addEventListener(`click`, () => randomizeCards(count));
  });
  main.insertBefore(section, searchWrapper);
};

const renderCards = (number) => {
  const div = document.createElement(`div`);
  div.className = `board__tasks`;
  for (let i = 0; i < number; i++) {
    div.insertAdjacentHTML(`beforeend`, getCardElement());
  }
  board.insertBefore(div, loadBtn);
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * (CARD_NUMBER.max - CARD_NUMBER.min)) + CARD_NUMBER.min;
};

renderFilters();
renderCards(CARD_NUMBER.default);

import {FILTERS, CARD_NUMBER} from './data';
import getTask from './get-task';
import {getRandomNumber} from "./utils";
import {getFilterElement} from "./make-filter";
import getCardElement from "./make-card";

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
    const count = getRandomNumber(CARD_NUMBER.max, CARD_NUMBER.min);
    section.insertAdjacentHTML(`beforeend`, getFilterElement(filter.id, count, filter.disabled, filter.checked));
    const input = section.querySelector(`.filter__input:last-of-type`);
    input.addEventListener(`click`, () => randomizeCards(count));
  });
  main.insertBefore(section, searchWrapper);
};

const tasksList = [];

const createCards = (count) => {
  for (let i = 0; i < count; i++) {
    tasksList.push(getCardElement(getTask()));
  }
};

const renderCards = (number) => {
  const div = document.createElement(`div`);
  div.className = `board__tasks`;
  createCards(number);
  for (let el of tasksList) {
    if (tasksList.indexOf(el) < number) {
      div.insertAdjacentHTML(`beforeend`, el);
    }
  }
  board.insertBefore(div, loadBtn);
};

renderFilters();
renderCards(CARD_NUMBER.default);

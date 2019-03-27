import {FILTERS, CARD_NUMBER} from './data';
import {getTask} from './get-task';
import Task from './task';
import TaskEdit from './task-edit';
import {getRandomNumber} from "./utils";
import {getFilterElement} from "./make-filter";

const main = document.querySelector(`.main`);
const searchWrapper = document.querySelector(`.statistic`);
const boardWrapper = document.querySelector(`.board__tasks`);

const randomizeCards = (n) => {
  boardWrapper.innerHTML = ``;
  renderCards(n);
};

const renderFilters = () => {
  const section = document.createElement(`section`);
  section.className = `main__filter filter container`;
  for (const filter of FILTERS) {
    const count = getRandomNumber(CARD_NUMBER.max, CARD_NUMBER.min);
    section.insertAdjacentHTML(`beforeend`, getFilterElement(filter.id, count, filter.disabled, filter.checked));
    const input = section.querySelector(`.filter__input:last-of-type`);
    input.addEventListener(`click`, () => randomizeCards(count));
  }
  main.insertBefore(section, searchWrapper);
};

const tasks = [];
const editTasks = [];

const createCards = (n) => {
  for (let i = 0; i < n; i++) {
    const data = getTask();
    const task = new Task(data);
    const editTask = new TaskEdit(data);
    tasks.push(task);
    editTasks.push(editTask);
  }
};

const renderCards = (number) => {
  const cards = [];
  createCards(number);
  for (let [i, el] of tasks.entries()) {
    if (tasks.indexOf(el) < number) {
      cards.push(el.render());
      el.onEdit = () => {
        editTasks[i].render();
        boardWrapper.replaceChild(editTasks[i].element, el.element);
        el.unrender();
      };
      editTasks[i].onSubmit = () => {
        el.render();
        boardWrapper.replaceChild(el.element, editTasks[i].element);
        editTasks[i].unrender();
      };
    }
  }
  boardWrapper.prepend(...cards);
};

renderFilters();
renderCards(CARD_NUMBER.default);

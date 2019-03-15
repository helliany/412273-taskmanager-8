import {getRandomBoolean} from "./utils";
import {makeCard} from "./make-card";

export const FILTERS = [
  {id: `All`, checked: true},
  {id: `Overdue`, disabled: true},
  {id: `Today`, disabled: true},
  {id: `Favorites`},
  {id: `Repeating`},
  {id: `Tags`},
  {id: `Archive`}
];

export const CARD_NUMBER = {
  default: 7,
  max: 16,
  min: 1
};

export const task = () => ({
  titles: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
  ]),
  picture: `//picsum.photos/100/100?r=${Math.random()}`,
  colors: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ],
  repeatingDays: {
    'mo': true,
    'tu': false,
    'we': true,
    'th': false,
    'fr': false,
    'sa': true,
    'su': false,
  },
  isFavorite: getRandomBoolean(),
  isDone: getRandomBoolean()
});
export const taskList = [];
export const createCard = (count) => {
  // let newTasks = {
  //     title: data.titles,
  //     tags: data.tags,
  //     picture: data.picture,
  //     repeatingDays: data.repeatingDays,
  //     type: data.type,
  //     color: data.color,
  //     isFavorite: data.isFavorite,
  //     isDone: data.isDone,
  // };
  // return newTasks;

  // const fillTaskList = (count) => {
  for (let i = 0; i < count; i += 1) {
    taskList.push(makeCard(task()));
  }
  // };
};
createCard(7);

// const renderCards = (count, getDataForCard) => {
//   let content = ``;
//   let i = 0;

//   while (i < count) {
//     content +=  getCardElement(createCard(getDataForCard()));
//     i++;
//   }
//   return content;
// };

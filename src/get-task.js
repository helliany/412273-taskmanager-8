import {getRandomBoolean} from "./utils";

const getTask = () => ({
  titles: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],
  dueDate: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000) + Math.floor(Math.random() * 14 * 24 * 60 * 60 * 1000)),
  tags: [
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
  ].filter(() => getRandomBoolean()).slice(0, 3),
  picture: `//picsum.photos/100/100?r=${Math.random()}`,
  colors: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],
  repeatingDays: [{'mo': true, 'tu': false, 'we': true, 'th': false, 'fr': false, 'sa': true, 'su': false}, {'mo': false, 'tu': false, 'we': false, 'th': false, 'fr': false, 'sa': false, 'su': false}][Math.floor(Math.random() * 2)],
  isFavorite: getRandomBoolean(),
  isDone: getRandomBoolean()
});

export default getTask;

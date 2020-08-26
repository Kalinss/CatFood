import { CatFoodItemDataType } from "../components/molecules/CatFoodItem/types";

export const catFoodData: CatFoodItemDataType[] = [
  {
    id: 0,
    description: {
      value: "Сказочное заморское яство",
      alternative: "Котэ не одобряет?",
    },
    title: "Нямушка",
    subTitle: "c фуа-гра",
    count: {
      value: "0,5",
      metric: "кг",
    },
    info: ["<b>10</b> порций", "мышь в подарок"],
    isActive: false,
    disabled: {
      value: false,
      warn: "Печалька, с фуа-гра закончился.",
    },
    additional: {
      value: "Чего сидишь? Порадуй котэ, <a>купи</a>",
      alternative: "Печень утки разварная с артишоками.",
    },
  },
  {
    id: 1,
    description: {
      value: "Сказочное заморское яство",
      alternative: "Котэ не одобряет?",
    },
    title: "Нямушка",
    subTitle: "c рыбой",
    count: {
      value: "2",
      metric: "кг",
    },
    info: ["<b>40</b> порций", "<b>2</b> мыши в подарок"],
    isActive: false,
    disabled: {
      value: false,
      warn: "Печалька, с рыбой закончился.",
    },
    additional: {
      value: "Чего сидишь? Порадуй котэ, <a>купи</a>",
      alternative: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    },
  },
  {
    id: 2,
    description: {
      value: "Сказочное заморское яство",
      alternative: "Котэ не одобряет?",
    },
    title: "Нямушка",
    subTitle: "c курой",
    count: {
      value: "5",
      metric: "кг",
    },
    info: ["<b>100</b> порций", "<b>5</b> мышей в подарок", "заказчик доволен"],
    isActive: false,
    disabled: {
      value: false,
      warn: "Печалька, с курой закончился.",
    },
    additional: {
      value: "Чего сидишь? Порадуй котэ, <a>купи</a>",
      alternative: "Филе из цыплят с трюфелями в бульоне.",
    },
  },
];

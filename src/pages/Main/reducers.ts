import { CatFoodItemDataType } from "../../components/molecules/CatFoodItem/types";

type updateCollectionByIdProps = (
  collection: CatFoodItemDataType[],
  id: number,
  fn: (item: CatFoodItemDataType) => CatFoodItemDataType
) => CatFoodItemDataType[];

export const updateCollectionById: updateCollectionByIdProps = (
  collection,
  id,
  fn
) => {
  return collection.reduce((acc, item) => {
    if (item.id === id) {
      return [...acc, fn(item)];
    }
    return [...acc, { ...item }];
  }, [] as CatFoodItemDataType[]);
};

export const disabledItem = (item: CatFoodItemDataType) => ({
  ...item,
  disabled: { ...item.disabled, value: true },
});

export const toggleActiveItem = (item: CatFoodItemDataType) => ({
  ...item,
  isActive: !item.isActive,
});

export const reducer = (
  state: CatFoodItemDataType[],
  action: { type: string; id: number }
) => {
  switch (action.type) {
    case "toggleActive":
      return updateCollectionById(state, action.id, toggleActiveItem);
    case "disabledItem":
      return updateCollectionById(state, action.id, disabledItem);
    default:
      return state;
  }
};

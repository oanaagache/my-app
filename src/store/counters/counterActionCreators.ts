export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const incrementByValue = (number: number) => ({
  type: "INCREMENT_BY_VALUE",
  payload: {
    number,
  },
});

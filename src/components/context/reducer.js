export const initialState = {
  basket: [],
};

const reducer = (state = initialState.basket, action) => {
  console.log(action);
  switch (action.type) {
    case 'Add-To-Basket':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'Remove-From-Basket':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product (id: ${action.id}) as its not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
export default reducer;

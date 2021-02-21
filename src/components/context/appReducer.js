export default (action, state) => {
  console.log(action);
  switch (action.type) {
    case 'Add_To_Basket':
      return {
        ...state,
        basket: [action.payload, ...state.basket],
      };
    default:
      return state;
  }
};

export const initialState = {
  basket: ["ashsih"],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        state,
      };
      break;
    default:
      return state;
  }
};

export default reducer;

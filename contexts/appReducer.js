export const initialState = {
  localisation: "",
  time: "",
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "add_localisation": {
      return {
        ...state,
        localisation: action.value + state.localisation,
      };
    }
    case "add_time": {
      return {
        ...state,
        time: action.value + state.time,
      };
    }
  }
};

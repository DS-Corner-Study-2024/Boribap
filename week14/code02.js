const counter = handleActions(
    {
      [INCREASE]: (state, action) => ({ number: state.number + 1 }),
      [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
  );
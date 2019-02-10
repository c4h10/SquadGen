export const loadState = (stateKey: string) => {
  try {
    const serializedState = localStorage.getItem(stateKey);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);

  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, stateKey) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateKey, serializedState);
  } catch (err) {
    // die
  }
};

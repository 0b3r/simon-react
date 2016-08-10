import reducer from './utils';

const initalState = [];

const reducers = {
  ADD_TO_SEQUENCE: (state, { color }) => (
    [...state, color]
  )
};

export default (state = initalState, action) => reducer(state, action, reducers);
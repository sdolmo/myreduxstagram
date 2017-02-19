// reducers update the store/state in redux based on the information received from the actions

// a reducer takes in two things:

// 1. the action (info about what happend)
// 2. copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log(action);
      // return the updates state
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}

export default posts;

// every reducer runs when there is an action, whether something changes in state is up you

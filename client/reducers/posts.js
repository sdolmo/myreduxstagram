// reducers update the store/state in redux based on the information received from the actions

// a reducer takes in two things:

// 1. the action (info about what happend)
// 2. copy of current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts

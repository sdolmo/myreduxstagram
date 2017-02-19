// reducers update the store/state in redux based on the information received from the actions

// a reducer takes in two things:

// 1. the action (info about what happend)
// 2. copy of current state

function posts(state = [], action) {
  console.log('The post will change');
  console.log(state, action);
  return state;
}

export default posts

// every reducer runs when there is an action, whether something changes in state is up you

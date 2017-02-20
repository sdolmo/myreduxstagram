// reducers update the store/state in redux based on the information received from the actions

// a reducer takes in two things:

// 1. the action (info about what happend)
// 2. copy of current state

// this will update the individual post
function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
        return [...state,{
          user: action.author,
          text: action.comment
        }];
    case 'REMOVE_COMMENT':
      console.log('Removing a comment');
      // we need to return the new state without the deleted comment
      return [
        // frorm the start to the one we want to delete
        ...state.slice(0,action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

// this will update the snippet from the comment
function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments

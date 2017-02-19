// These action creators get dispatched with the information about what happend

// incremet likes
// this function takes in the index of the post we want to add a like to
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index //this index value is equal to the index argument(index: index) in ES6
  }
}

// add comments
// this function takes the id of the post we're adding a comment to plus the author and the actual comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
// this function takes in the post id and the index of the comment we want to delete
 export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}

// MAKE SURE! to export actions to be accessible in other components

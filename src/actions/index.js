// keys for actiontypes
// export const ActionTypes = {
//   INCREMENT: 'INCREMENT',
//   DECREMENT: 'DECREMENT',
// };
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // CREATE_POST: 'CREATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

export function fetchPost() {
  return {
    type: ActionTypes.FETCH_POST,
    payload: null,
  };
}

export function fetchPosts() {
  return {
    type: ActionTypes.FETCH_POSTS,
    payload: null,
  };
}

// export function increment() {
//   return {
//     type: ActionTypes.INCREMENT,
//     payload: null,
//   };
// }

// export function decrement() {
//   return {
//     type: ActionTypes.DECREMENT,
//     payload: null,
//   };
// }

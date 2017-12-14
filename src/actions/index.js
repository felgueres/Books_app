export function selectBook(book){
  //selectBook is an action creator so it needs to create an action.
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book)=> {
      return (
        <li
        key={book.title}
        onClick={()=>this.props.selectBook(book)}
        className="list-group-item">
        {book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-3'>
        <li className="list-group-item "><strong>Assets in Portfolio</strong></li>
        {this.renderList()}
      </ul>
    )
  }
}
function mapStateToProps(state){
  // Whatever is return will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}
// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed
  // to all our reducers.
  // Note that the value from the key-value in the object is the function.
  return bindActionCreators({selectBook: selectBook}, dispatch);
}
// Promote BookList from a component to a container - it needs to know
// about this new dipatch method, SelectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

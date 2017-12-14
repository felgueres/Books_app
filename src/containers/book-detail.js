import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){

    // Add this line to avoid trying to get a property from an object that has not been defined, aka, error.
    if(!this.props.book){
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for this book:</h3>
        <div>Title:  {this.props.book.title}</div>
        <div>Pages:  {this.props.book.pages}</div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book:state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);

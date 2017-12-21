import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){

    // Add this line to avoid trying to get a property from an object that has not been defined, aka, error.
    if(!this.props.book){
      return <div>Select an asset to get started.</div>
    }

    return (
      <div>
        <h4>Performance Over IE Forecast</h4>
        <div>Name:  {this.props.book.title}</div>
        <div>Characteristics:  {this.props.book.pages}</div>

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

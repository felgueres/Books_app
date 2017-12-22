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
        <h3 className='subtitles'>Asset Characteristics</h3>
        <div>Name:  {this.props.book.title}</div>
        <div>DC Capacity:  {this.props.book.dc} kW</div>
        <div>AC Capacity:  {this.props.book.ac} kWac</div>

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

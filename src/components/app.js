import React, { Component } from 'react';
import BookDetail from '../containers/book-detail';
import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

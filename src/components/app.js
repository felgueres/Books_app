import React, { Component } from 'react';
import BookDetail from '../containers/book-detail';
import BookList from '../containers/book-list';
import NavBar from './navbar';
import NavSelection from './navselection';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <NavSelection />
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

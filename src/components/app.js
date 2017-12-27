import React, { Component } from 'react';
import BookDetail from '../containers/book-detail';
import BookList from '../containers/book-list';
import NavBar from './navbar';
import PerformanceHorizontal from '../containers/performance-horizontal';
import NavSelection from './navselection';

export default class App extends Component {
  render() {
    return (
      <div>

        <div>
          <NavBar />
          <NavSelection />
        </div>

        <div>
          <BookList />
        </div>

        <div>
          <BookDetail />
        </div>

        <div>
          <PerformanceHorizontal />
        </div>
      </div>
    );
  }
}

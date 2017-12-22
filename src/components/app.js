import React, { Component } from 'react';
import BookDetail from '../containers/book-detail';
import BookList from '../containers/book-list';
import NavBar from './navbar';
import PerformanceHorizontal from '../containers/performance-horizontal';
import PerformanceHorizontalOptimized from '../containers/performance-horizontal-optimized';

import NavSelection from './navselection';

export default class App extends Component {
  render() {
    return (
      <div>

        <div>
          <NavBar />
          <NavSelection />
        </div>

        <div className='list-container'>
          <BookList />
        </div>

        <div className='jumbotron'>
          <BookDetail />
        </div>

        <div>
          <PerformanceHorizontal />
          <PerformanceHorizontalOptimized />
        </div>
      </div>
    );
  }
}

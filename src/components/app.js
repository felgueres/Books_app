// Library Dependencies
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import BookDetail from '../containers/book-detail';
import BookList from '../containers/book-list';
import NavBar from './navbar';
import PerformanceHorizontal from '../containers/performance-horizontal';
import NavSelection from './navselection';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <NavSelection />
        <div>
          <BookList />
          <BookDetail />
          <PerformanceHorizontal />
        </div>
      </div>
    );
  }
}

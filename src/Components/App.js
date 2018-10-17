import React, { Component } from 'react';

import { Header } from './Header/Header';
import { Search } from './Wrapper/Search';
import { Filter } from './Wrapper/Filter';
import { Classes } from './Wrapper/Classes';
import classes from '../assets/data';

import '../index';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: classes,
      durations: [],
      filter: [],
      searchText: ''
    };
  }

  componentWillMount() {
    const { data } = this.state;
    let durationList = [];

    data.classes.forEach(e => {
      if (durationList.indexOf(e.duration[0]) === -1) {
        durationList.push(e.duration[0]);
      }
    });
    durationList.sort();

    this.setState({ durations: durationList })
  }

  selectDuration(value) {
    if(this.state.filter.indexOf(value) === -1) {
      this.setState(prevState => ({
        filter: [...prevState.filter, value]
      }));
    } else {
      let filterValues = [...this.state.filter];
      const index = filterValues.indexOf(value);
      filterValues.splice(index, 1);

      this.setState({ filter: filterValues });
    }
  }

  setFilter(filterValues) {
    this.setState({
      filter: filterValues
    });
  }

  searchText(text) {
    this.setState({
      searchText: text
    });
  }

  render() {
    const { data, durations, filter, searchText } = this.state;

    return (
      <div className="App">
        <Header />
        <div className='default-page-wrapper'>
          <Search durations={durations} onSelectDuration={this.selectDuration.bind(this)} onSearchText={this.searchText.bind(this)} />
          <Filter durationFilter={filter} onSetFilter={this.setFilter.bind(this)} />
          <Classes classes={data.classes} filter={filter} searchText={searchText} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

export class Filter extends Component {
  constructor() {
    super();

    this.state = {
      filters: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filters: nextProps.durationFilter
    });
  }

  removeFilter(value) {
    let filterValues = [...this.state.filters];
    const index = filterValues.indexOf(value);
    filterValues.splice(index, 1);

    this.setState({ filters: filterValues }, () => {
      this.props.onSetFilter(this.state.filters);
    });
  }

  render() {
    const { filters } = this.state;

    return (
      <section className='ygi-search-filters'>
        { filters.length > 0 ?
          <div className='container px-3'>
            <div className='ygi-search-filters__wrapper'>
              <div className='ygi-search-filters__filters'>
                <label className='ygi-search-filters__filters-label'>Filters</label>
                <div className='row'>
                  { filters.map((e, i) => {
                    return (
                      <div key={i} className='col-xs-4 mt-2'>
                        <div role='button' className='ygi-search-filters__filter'>
                          <label className='ygi-search-filters__filter-label'>{e}</label>
                          <button className='ygi-search-filters__filter-close' onClick={this.removeFilter.bind(this, e)}></button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        : null }
      </section>
    )
  }
}
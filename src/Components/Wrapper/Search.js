import React, { Component } from 'react';

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      durations: props.durations
    };

    this.selectDuration = this.selectDuration.bind(this);
  }

  selectDuration (e) {
    this.props.onSelectDuration(e.target.value);
  }

  formatData (item) {
    return item.replace('-', ' ').toUpperCase();
  }

  searchByText(e) {
    this.props.onSearchText(e.target.value);
  }

  render() {
    const { durations } = this.state;

    return (
      <div id='app'>
        <div className='container px-3'>
            <h2 className='ygi-page-heading ygi-page-heading--dark'>Online 30 Minute Yoga Classes </h2>
        </div>
        <section className='ygi-search'>
          <div className='container px-3'>
            <div className='ygi-search__wrapper'>
              <div className='ygi-search-bar col col-12 col-lg-2'>
                <div className='ygi-search-bar__wrapper mt-2'>
                  <input placeholder='Search' type='text' className='ygi-search-bar__input' onChange={this.searchByText.bind(this)} />
                </div>
              </div>
              <div className='yi-dropdowns__wrapper-visibility col-lg-10 '>
                <div className='row'>
                  <div className='col-lg col-md-6 col-xs-12 mt-2'>
                    <div className='ygi-dropdown__wrapper yi-teacher-dropdown nopadding d-block yi-dropdown--beneath-modal'>
                      <button className='btn dropdown-toggle ygi-dropdown__placeholder'>
                        Teacher
                      </button>
                    </div>
                  </div>
                  <div className='col-lg col-md-6 col-xs-12 mt-2'>
                    <div className='ygi-dropdown__wrapper yi-teacher-dropdown nopadding d-block yi-dropdown--beneath-modal'>
                      <select value='Duration' className='btn dropdown-toggle ygi-dropdown__placeholder' onChange={this.selectDuration}>
                        <option value='Duration' disabled>Duration</option>
                        { durations.map((e, i) => (
                          <option key={i} className='dropdown-item ygi-dropdown__option'>{this.formatData(e)}</option>
                        ))}
                      </select>
                    </div>  
                  </div>
                  <div className='col-lg col-md-6 col-xs-12 mt-2'>
                    <div className='ygi-dropdown__wrapper yi-teacher-dropdown nopadding d-block yi-dropdown--beneath-modal'>
                      <button className='btn dropdown-toggle ygi-dropdown__placeholder'>
                        Level
                      </button>
                    </div>
                  </div>
                  <div className='col-lg col-md-6 col-xs-12 mt-2'>
                    <div className='ygi-dropdown__wrapper yi-teacher-dropdown nopadding d-block yi-dropdown--beneath-modal'>
                      <button className='btn dropdown-toggle ygi-dropdown__placeholder'>
                        Style
                      </button>
                    </div>
                  </div>
                  <div className='col-lg col-md-6 col-xs-12 mt-2'>
                    <div className='ygi-dropdown__wrapper yi-teacher-dropdown nopadding d-block yi-dropdown--beneath-modal'>
                      <button className='btn dropdown-toggle ygi-dropdown__placeholder'>
                        Anatomy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

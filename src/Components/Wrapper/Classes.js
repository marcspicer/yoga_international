import React, { Component } from 'react';

export class Classes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.classes,
      visible: 24
    };

    this.loadMore = this.loadMore.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filter.length) {
      this.setState({items:nextProps
                            .classes
                            .filter(
                              _class => nextProps
                                            .filter
                                            .find(
                                                filter => filter
                                                            .replace(' ', '-')
                                                            .toLowerCase() === _class.duration[0]))}, e => this.filterText(nextProps.searchText));
    } else {
      this.setState({items:nextProps.classes}, e => this.filterText(nextProps.searchText))
    }
  }

  filterText(searchText) {
    if(searchText) {
      this.setState((state) => ({
        items: state
                .items
                .filter(
                  _class => 
                  this.formatData(_class.teacher[0], 'teacher')
                  .toLowerCase()
                  .includes(searchText) ||
                  this.formatData(_class.level[0], 'level')
                  .toLowerCase()
                  .includes(searchText) ||
                  _class.title
                  .toLowerCase()
                  .includes(searchText)
                )
      }));
    }
  }

  loadMore () {
    this.setState((prevState) => ({ visible: prevState.visible + 24 }));
  }

  formatData (item, data) {
    if (!item) return '';
    if (data === 'teacher') {
      return item.replace('-', ' ').split(' ').map(i => (i.charAt(0).toUpperCase() + i.slice(1))).join(' ');
    }
    if (data === 'level') {
      return item.replace('-', ' ').replace('-', '/').toUpperCase();
    }

    return item.replace('-', ' ').toUpperCase();
  }

  render() {
    const { items, visible } = this.state;

    return (
      <section>
        <div className='ygi-profile-classes'>
          <div className='container'>
            <p className='ygi-profile-classes__heading mx-auto text-center'>{items.length} Results</p>
            <div className='ygi-profile-classes__wrapper'>
              { items.slice(0, visible).map((e, i) => {
                return (
                  <div key={i} className='m-2'>
                    <div className='yi-card-small-centered-hover-wrapper'>
                      <a href='/' className='yi-card-small'>
                        <div className='yi-card-small__image'>
                          <img src={'https:' + e.thumb} alt='Card' />
                        </div>
                        <div className='yi-card-small__content'>
                          <h4 className='yi-card-small__title yi-card-small__title--two-line'>{e.title}</h4>
                          <div className='yi-card-small__author'>{this.formatData(e.teacher[0], 'teacher')}</div>
                        </div>
                        <div className='yi-card-small__upper-right'></div>
                        <div className='yi-card-small__lower-background'></div>
                        <div className='yi-card-small__lower-left'>
                          <div><span className='yi-card-small__level'>{this.formatData(e.level[0], 'level')}</span></div>
                        </div>
                        <div className='yi-card-small__lower-right'>
                          <i className='icon-clock'></i>
                          <span className='yi-card-small__duration'>{this.formatData(e.duration[0])}</span>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
            { items.length > visible ? <div className='ygi-profile-classes__button-wrapper'>
              <button className='ygi-profile-classes__btn' onClick={this.loadMore}>Load More</button>
            </div> : null }
          </div>
        </div>
      </section>
    );
  }
}
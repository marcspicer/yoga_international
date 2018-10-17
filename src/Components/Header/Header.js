import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header className='ygi-header ygi-header--dark ygi-header--default'>
        <div className='container'>
          <nav className='ygi-header__nav-container ygi-header__nav-container'>
            <a className='ygi-header__brand' href='/'>
              <img className='ygi-header__logo' src='https://yogainternational.com/assets/fonts/icons/icon-logo.svg' alt='Yoga International' />
            </a>
            <a className='ygi-header__brand' href='/'>
              <svg role='presentation' className='ygi-header__logo-text--dark'>
              </svg>
            </a>
            <ul className='ygi-header__nav nav'>
              <li className='ygi-header__nav-item'>
                <a className='ygi-header__link' href='/' data-toggle='tab-2'>Classes</a>
              </li>
              <li className='ygi-header__nav-item'>
                <a className='ygi-header__link' href='/' data-toggle='tab-1'>Learn</a>
              </li>
              <li className='ygi-header__nav-item'>
                <a className='ygi-header__link' href='/' data-toggle='tab-3'>Courses</a>
              </li>
            </ul>
            <ul className='ygi-header__nav ygi-header__nav--right'>
              <li className='ygi-header__nav-item'>
                <form className='ygi-header__search ygi-header__search-open' method='GET' >
                  <input type='search' placeholder='Search...' name='keywords' className='ygi-header__search-input' required='' />
                </form>
              </li>
              <li className='ygi-header__nav-item'>
                <a className='ygi-header__link ygi-open-modal' href='/'>Sign In</a>
              </li>
              <li className='ygi-header__nav-item'>
                <a className='yi-button yi-button__nav' href='/'>Get Started</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

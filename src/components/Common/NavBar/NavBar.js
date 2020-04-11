import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './NavBar.scss';

const cx = classNames.bind(style);

const NavBar = ({ pageType }) =>{

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

  return(
    <div className={cx('NavBar')} id="navbar">
      <div className={cx('NavBar-wrap')}>
      <header className={cx('NavBar-wrap-header')}>
        <Link to={"/"} className={cx('NavBar-wrap-header-logo')} alt={"logo"}>
        로고
        </Link>
      </header>
      <nav className={cx('NavBar-wrap-nav')}>
        <ul className={cx('NavBar-wrap-nav-wrap')}>
          <li className={cx('NavBar-wrap-nav-wrap-child', {
            'NavBar-wrap-nav-wrap-child-select' : pageType === "main"})}>
            <Link to={'/'} className={cx('NavBar-wrap-nav-wrap-child-link', {
              'NavBar-wrap-nav-wrap-child-link-select': pageType === 'main'
            })}>
              바인드
            </Link>
          </li>
           <li className={cx('NavBar-wrap-nav-wrap-child', { 'NavBar-wrap-nav-wrap-child-select': pageType === 'service'})}>
            <Link to={'/service'} className={cx('NavBar-wrap-nav-wrap-child-link', { 'NavBar-wrap-nav-wrap-child-link-select': pageType === 'service'})}>
              서비스
            </Link>
          </li>
           <li className={cx('NavBar-wrap-nav-wrap-child', { 'NavBar-wrap-nav-wrap-child-select': pageType === 'service_intro'})}>
            <Link to={'/service_intro'} className={cx('NavBar-wrap-nav-wrap-child-link', { 'NavBar-wrap-nav-wrap-child-llink-select': pageType === 'service_intro'})}>
              소개
            </Link>
          </li>
           <li className={cx('NavBar-wrap-nav-wrap-child', { 'NavBar-wrap-nav-wrap-child-select': pageType === 'inquiry'})}>
            <Link to={'/inquiry'} className={cx('NavBar-wrap-nav-wrap-child-link', { 'NavBar-wrap-nav-wrap-child-link-select': pageType === 'inquiry'})}>
              문의
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  pageType: PropTypes.oneOf([
    'main',
    'service',
    'inquiry',
    'service_intro'
  ]),
  history: PropTypes.any
};

export default NavBar;

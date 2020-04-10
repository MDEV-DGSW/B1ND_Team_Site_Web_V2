import React from 'react';
import NavBar from 'components/Common/NavBar';
import Footer from 'components/Common/Footer';
import classNames from 'classnames/bind';
import style from './MainTemplate.scss';

const cx = classNames.bind(style);

const MainTemplate = ({children})=>{

  return(
    <div className={cx('MainTemplate')}>
      <div className={cx('MainTemplate-header')}> 
      <NavBar/>
      </div>
      <div className={cx('MainTemplate-contents')}>
        {children}
      </div>
      <div className={cx('MainTemplate-footer')}>
        <Footer/>
      </div>
    </div>
  )

}

export default MainTemplate;
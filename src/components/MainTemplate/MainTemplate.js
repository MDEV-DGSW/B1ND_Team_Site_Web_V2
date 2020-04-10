import React from 'react';
import NavBar from 'components/Common/NavBar';
import Footer from 'components/Common/Footer';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './MainTemplate.scss';

const cx = classNames.bind(style);

const MainTemplate = ({pageType, children})=>{

  return(
    <div className={cx('MainTemplate')}>
      <div className={cx('MainTemplate-header')}> 
      <NavBar pageType={pageType}/>
      </div>
      <div className={cx('MainTemplate-contents')}>
        {children}
      </div>
      <div className={cx('MainTemplate-footer')}>
        <Footer/>
      </div>
    </div>
  );
};

MainTemplate.propTypes = {
  pageType: PropTypes.oneOf([
    'main',
    'inquiry',
    'service',
    'service_intro',
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node
  ]).isRequired
};

export default MainTemplate;
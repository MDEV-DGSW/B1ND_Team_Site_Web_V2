import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Footer.scss';
import BIND_LOGO from 'assets/images/bind_logo.svg';

const cx = classNames.bind(style);

const Footer = ({ history }) => {
  return (
    <div className={cx('Footer')}>
      <div className={cx('Footer-contents')}>
        <div className={cx('Footer-contents-panel')}>
          <div className={cx('Footer-contents-panel-left')}>
            <img
              src={BIND_LOGO}
              alt="logo"
              className={cx('Footer-contents-panel-left-logo')}
            />
            <div className={cx('Footer-contents-panel-left-link')}>
              <div
                className={cx('Footer-contents-panel-left-link-title')}
                // onClick={() => history.push('/dodam_web_rel_s')}
              >
                version: 0.0605
              </div>
              {/* <div className={cx('Footer-contents-panel-left-link-title')}>
          운영정책
          </div>
          <div className={cx      ('Footer-contents-panel-left-link-title')}>
          개인정보 처리방침
          </div> */}
              <div className={cx('Footer-contents-panel-left-link-center')}>
                Copyright By B1ND team. All rights reserved. Since 2017
              </div>
              <div className={cx('Footer-contents-panel-left-link-email')}>
                문의 이메일: mdev_team@dgsw.hs.kr
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  history: PropTypes.any,
};

export default withRouter(Footer);

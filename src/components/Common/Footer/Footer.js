import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Footer.scss";
import BIND_LOGO from "assets/icon/B1nd_Logo.svg";
import DGSW_LOGO from "assets/icon/DGSW LOGO.png";

const cx = classNames.bind(style);

const Footer = ({ history }) => {
  return (
    <div className={cx("Footer")}>
      <div className={cx("Footer-contents")}>
        <div className={cx("Footer-contents-panel")}>
          <div className={cx("Footer-contents-panel-left")}>
            <img src={DGSW_LOGO} alt="logo" className={cx("Footer-contents-panel-left-logo")} />
            <div className={cx("Footer-contents-panel-left-link")}>
              <div
                className={cx("Footer-contents-panel-left-link-title")}
                // onClick={() => history.push('/dodam_web_rel_s')}
              >
                version: 1.1.2
              </div>
              {/* <div className={cx('Footer-contents-panel-left-link-title')}>
          운영정책
          </div>
          <div className={cx      ('Footer-contents-panel-left-link-title')}>
          개인정보 처리방침
          </div> */}
              <div className={cx("Footer-contents-panel-left-link-center")}>
                Copyright By Daegu Software Meister High School. All rights reserved. Since 2017
              </div>
              <div className={cx("Footer-contents-panel-left-link-email")}>
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

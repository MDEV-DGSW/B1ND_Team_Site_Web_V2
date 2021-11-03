import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import style from "./ServiceNoticeTemplate.scss";
import DODAM_LOGO from "assets/icon/dodamLogo.svg";

const cx = classNames.bind(style);

const ServiceNoticeTemplate = ({ title, subtitle, content, history }) => {
  return (
    <div>
      <div className={cx("ServiceNoticeTemplate-header")}>
        <div className={cx("ServiceNoticeTemplate-wrap-logo")}>
          <img
            className={cx("ServiceNoticeTemplate-wrap-logo-img")}
            src={DODAM_LOGO}
            alt={"dodamdodam_logo"}
            onClick={() => {
              history.push("/");
            }}
          />
        </div>
      </div>
      <div className={cx("ServiceNoticeTemplate-contents")}>
        <div className={cx("ServiceNoticeTemplate-header-title")}>
          <div className={cx("ServiceNoticeTemplate-header-title-text")}>{title}</div>
          <div className={cx("ServiceNoticeTemplate-header-title-sub")}>{subtitle}</div>
        </div>
        <div className={cx("ServiceNoticeTemplate-content-wrap")}>
          <div className={cx("ServiceNoticeTemplate-content-text")}>{content}</div>
        </div>
      </div>
    </div>
  );
};

ServiceNoticeTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default withRouter(ServiceNoticeTemplate);

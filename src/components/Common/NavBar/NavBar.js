import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './NavBar.scss';
import LOGO from 'assets/icon/B1nd_Logo.svg';
import DODAMLOGO from 'assets/icon/dodamLogo.svg';
import { withRouter } from 'react-router-dom';
const cx = classNames.bind(style);

const NavBar = ({ pageType, history }) => {
  //   let prevScrollpos = window.pageYOffset;
  //    window.onscroll = function() {
  //    let currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("navbar").style.top = "0";
  //   } else {
  //     document.getElementById("navbar").style.top = "-100px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // }

  return (
    <div className={cx('NavBar')} id="navbar">
      <div className={cx('NavBar-wrap')}>
        <nav className={cx('NavBar-wrap-nav')}>
          <Link to={'/'}>
            <img
              src={LOGO}
              alt="logo"
              className={cx('NavBar-wrap-nav-wrap-logo')}
            />
            <span className={cx('NavBar-wrap-nav-wrap-logo-text')}>바인드</span>
          </Link>
          <ul className={cx("NavBar-wrap-nav-wrap")}>
            <Link
              to={"/"}
              className={cx("NavBar-wrap-nav-wrap-child-link", {
                "NavBar-wrap-nav-wrap-child-link-select": pageType === "main",
              })}
            >
              <li
                className={cx("NavBar-wrap-nav-wrap-child", {
                  "NavBar-wrap-nav-wrap-child-select": pageType === "main",
                })}
              >
                메인
              </li>
            </Link>
            <div className={cx("NavBar-wrap-nav-wrap-child-link")}>
              <Link
                to={"/service"}
                className={cx("NavBar-wrap-nav-wrap-child-link", {
                  "NavBar-wrap-nav-wrap-child-link-select": pageType === "service",
                })}
              >
                <li
                  className={cx("NavBar-wrap-nav-wrap-child-box", {
                    "NavBar-wrap-nav-wrap-child-select":
                      pageType === "service" || pageType === "history",
                  })}
                >
                  소개
                </li>
              </Link>
              <div className={cx("NavBar-wrap-nav-wrap-child-link-hoverContent")}>
                <div
                  className={cx("NavBar-wrap-nav-wrap-child-link-hoverContent-service")}
                  onClick={() => history.push("/service")}
                >
                  소개
                </div>
                <div
                  className={cx("NavBar-wrap-nav-wrap-child-link-hoverContent-history")}
                  onClick={() => history.push("/history")}
                >
                  팀 연혁
                </div>
              </div>
            </div>
            <Link
              to={"/service_intro"}
              className={cx("NavBar-wrap-nav-wrap-child-link", {
                "NavBar-wrap-nav-wrap-child-link-select": pageType === "service_intro",
              })}
            >
              <li
                className={cx("NavBar-wrap-nav-wrap-child", {
                  "NavBar-wrap-nav-wrap-child-select": pageType === "service_intro",
                })}
              >
                서비스
              </li>
            </Link>
            <Link
              to={"/inquiry"}
              className={cx("NavBar-wrap-nav-wrap-child-link", {
                "NavBar-wrap-nav-wrap-child-link-select": pageType === "inquiry",
              })}
            >
              <li
                className={cx("NavBar-wrap-nav-wrap-child", {
                  "NavBar-wrap-nav-wrap-child-select": pageType === "inquiry",
                })}
              >
                문의
              </li>
            </Link>
            <Link
              to={"/hire"}
              className={cx("NavBar-wrap-nav-wrap-child-link", {
                "NavBar-wrap-nav-wrap-child-link-select": pageType === "hire",
              })}
            >
              <li
                className={cx("NavBar-wrap-nav-wrap-child", {
                  "NavBar-wrap-nav-wrap-child-select": pageType === "hire",
                })}
              >
                채용
              </li>
            </Link>
            <Link
              to={"/dandi"}
              className={cx("NavBar-wrap-nav-wrap-child-link", {
                "NavBar-wrap-nav-wrap-child-link-select": pageType === "dandi",
              })}
            >
              <li
                className={cx("NavBar-wrap-nav-wrap-child", {
                  "NavBar-wrap-nav-wrap-child-select": pageType === "dandi",
                })}
              >
                모집
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  pageType: PropTypes.oneOf(["main", "service", "inquiry", "service_intro"]),
  history: PropTypes.any,
};

export default withRouter(NavBar);

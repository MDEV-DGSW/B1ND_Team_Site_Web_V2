import React, { useState, useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import './NavBar.scss';

function NavBarItem({ navName, link, match, className }) {
  const { url: currentLink } = match;

  return(
  <li className={`nav-bar__item ${link === currentLink }`}>
    <Link to={link}>
      {navName}
    </Link>
  </li>
  );
}

function NavBar({store}) {
  return(
  <nav>
    <ul>
      <NavBarItem navName="메인" link={"/"} />
      <NavBarItem navName="멤버 소개" link={"/Member"} />
      <NavBarItem navName="서비스" link={"/ServiceNotice"} />
      <NavBarItem navName="QNA" link={"/Inquiry"} />
    </ul>
  </nav>
  );
}

export default NavBar;
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './NotFound.scss';
import ImageIcon from 'components/Common/ImageIcon';
import DODAM_LOGO from 'assets/icon/dodamLogo.svg';
import NOTFOUND from 'assets/images/notfound/notfound.svg';

const cx = classNames.bind(style);

const NotFound = ({ history }) => {
  return (
    <div className={cx('NotFound')}>
      <div className={cx('NotFound-wrap')}>
        <div className={cx('NotFound-wrap-contents')}>
          <span className={cx('NotFound-wrap-contents-link')} title={'도담도담 바로가기'} onClick={() => history.push('/')}><ImageIcon src={DODAM_LOGO} alt={'dodam_logo'} width={'150px'} customClass={'NotFound-wrap-contents-link-logo'} /></span>
          <span className={cx('NotFound-wrap-contents-title')}>404</span> 
          <span className={cx('NotFound-wrap-contents-subtitle')}>Page Not Found.</span>
          <span className={cx('NotFound-wrap-contents-detail')}>The requested URL was not found on this server..</span>
        </div>
        <ImageIcon src={NOTFOUND} alt={'illust'} width={'350px'} margin={'auto 0 auto auto'} customClass={'NotFound-wrap-ilu'} />
      </div>
      
    </div>
  );
};

NotFound.propTypes = {
  history: PropTypes.object
};

export default withRouter(NotFound);

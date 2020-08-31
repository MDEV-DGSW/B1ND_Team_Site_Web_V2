import React from 'react';
import classNames from 'classnames/bind';
import style from './Loading.scss';

const cx = classNames.bind(style);

const Loading = () => {
  return (
    <div className={cx('PageLoading')}>
      <span className={cx('PageLoading-span')}>L</span>
      <span className={cx('PageLoading-span')}>O</span>
      <span className={cx('PageLoading-span')}>A</span>
      <span className={cx('PageLoading-span')}>D</span>
      <span className={cx('PageLoading-span')}>I</span>
      <span className={cx('PageLoading-span')}>N</span>
      <span className={cx('PageLoading-span')}>G</span>
      <span className={cx('PageLoading-span')}>.</span>
      <span className={cx('PageLoading-span')}>.</span>
      <span className={cx('PageLoading-span')}>.</span>
    </div>
  );
};

export default Loading;

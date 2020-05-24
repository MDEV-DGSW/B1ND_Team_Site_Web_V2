import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Button.scss';

const cx = classNames.bind(style);

const Button = ({ handleFunction, appearance, customStyle, type, edgeType, isLoading, children }) => {
  const handleButtonClick = () => {
    if (isLoading) return;
    handleFunction();
  };

  return <>
    <button type={type} className={cx(`button-${appearance} button-${edgeType}`)} onClick={event => {
      if (isLoading) event.preventDefault();
      handleButtonClick();
    }} style={{ width: customStyle.width, height: customStyle.height, margin: customStyle.margin }}>
      {
        isLoading ?
          <div className={cx('button-loadingWrap')}>
            <div className={cx('button-loadingWrap-spin')}></div>
            <span className={cx('button-loadingWrap-content')}>Loading</span>
          </div> :
          <div className={cx('button-content')} style={{fontSize: customStyle.fontSize}}>
            {children}
          </div>
      }
    </button>
  </>;
};

Button.propTypes = {
  /** 버튼이 클릭 되었을 때 실행되는 함수 */
  handleFunction: PropTypes.func,
  /** 버튼에 들어갈 내용 */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  /** 버튼 외형 타입 */
  appearance: PropTypes.oneOf([
    'primary', 'secondary', 'tertiary', 'outline', 'outlineSecondary', 'outlineTertiary'
  ]),
  /** 버튼의 width, height, 폰트 사이즈를 수정 */
  customStyle: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    fontSize: PropTypes.string,
    margin: PropTypes.string
  }),
  /** 버튼의 실행 타입 */
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset'
  ]),
  /** 버튼의 테두리 타입 */
  edgeType: PropTypes.oneOf([
    'round',
    'square'
  ]),
  /** 로딩 상태 */
  isLoading: PropTypes.bool
};

Button.defaultProps = {
  content: 'Button',
  appearance: 'primary',
  customStyle: {
    width: '20%',
    height: '10%',
    fontSize: '1.2rem',
    margin: '0'
  },
  type: 'button',
  handleFunction: () => {},
  edgeType: 'round',
  isLoading: false
};

export default Button;

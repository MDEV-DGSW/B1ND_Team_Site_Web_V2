import React from 'react';
import classNames from 'classnames/bind';
import style from './Dandi.scss';

const cx = classNames.bind(style);

const Dandi = () => {
  return (
    <>
      <div className={cx('DandiTemplate-header')}>
        <div className={cx('DandiTemplate-wrap-logo')}></div>
      </div>
      <div className={cx('DandiTemplate-contents')}>
        <div className={cx('DandiTemplate-header-title')}>
          <div className={cx('DandiTemplate-header-title-text')}>
            단디 프로젝트 면접 일정 안내
          </div>
          <div className={cx('DandiTemplate-header-title-sub')}>
            2020년 단디 프로젝트에 지원해 주신 모든 분들께 감사의 인사를 전합니다.
            <br />
          </div>
        </div>

        <div className={cx('DandiTemplate-content-wrap')}>
          <div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>안녕하세요, B1ND 팀입니다.</div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <b>2021 1학기 6기 단디 프로젝트 모집 결과에 대해 안내드립니다.</b>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            
            <div>
              <b>단디 프로젝트를 함께 할 학생들은 아래와 같습니다</b>
            </div>
            <div>
                <b>&nbsp;</b>
              </div>
              <div>
                <div>
                  1115 이윤성, 1118 임동현
                  <b>&nbsp;</b>
                </div>
                <div>
                  1206 김상은, 1212 양시훈, 1216 정우재
                  <b>&nbsp;</b>
                </div>
                <div>
                  1310 김태환, 1320 최민재
                  <b>&nbsp;</b>
                </div>
              </div>
              <div>
                <b>&nbsp;</b>
              </div>
              <div>
                <b>&nbsp;</b>
              </div>
              <div>
                <b>[합격자 대상 추가 안내사항]</b>
                <div>
                  <b>&nbsp;</b>
                </div>
              </div>
              <div>
                &nbsp; -{' '}
                <b>
                  수요일(3/31) 야자 1교시부터 단디 프로젝트 안내가 있을 예정입니다
                </b>
              </div>
              <div>
                &nbsp; - <b>바인드팀은 본인의 의사를 존중합니다. </b>
                단디 프로젝트 참여의 최종 결정은 부담없이 
              </div>
              <div>
              본인이 판단하시면 되며, 단디 프로젝트 참여에 결정이 확고하신 분들은
                <b> 수요일 안내에 참여하시면 됩니다.</b>
              </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Dandi;
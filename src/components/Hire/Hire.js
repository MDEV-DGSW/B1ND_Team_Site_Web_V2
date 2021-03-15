import React from 'react';
import './Hire';
import classNames from 'classnames/bind';
import style from './Hire.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { HashRouter } from 'react-router-dom';
import * as Pages from '../../Page';

const cx = classNames.bind(style);
const isHire = false;

const Hire = () => {
  
  return (
    isHire ? 
      <>
        <div>
          <div className={cx('ServiceNoticeTemplate-header')}>
            <div className={cx('ServiceNoticeTemplate-wrap-logo')}></div>
          </div>
          <div className={cx('ServiceNoticeTemplate-contents')}>
            <div className={cx('ServiceNoticeTemplate-header-title')}>
              <div className={cx('ServiceNoticeTemplate-header-title-text')}>
                바인드 채용 결과 안내
              </div>
              <div className={cx('ServiceNoticeTemplate-header-title-sub')}>
                2020년 5기 채용에 지원해 주신 모든 분들께 감사의 인사를 전합니다.
                <br />
              </div>
            </div>

            <div className={cx('ServiceNoticeTemplate-content-wrap')}>
              <div>
                <b>&nbsp;</b>
              </div>
              <div>안녕하세요, B1ND 팀입니다.</div>
              <div>
                <b>2020 후반기 5기 공개 채용 결과에 대해 안내드립니다.</b>
              </div>
              <div>
                <b>&nbsp;</b>
              </div>
              <div>
                <b>바인드와 함께 할 학생들은 아래와 같습니다</b>
              </div>
              <div>
                <b>&nbsp;</b>
              </div>
              <div>
                &nbsp;<b>서버팀</b> : 신중빈, 전해윤
              </div>
              <div>
                &nbsp;<b>모바일팀</b> : 사승은
              </div>
              <div>
                &nbsp;<b>윈도우팀</b> : 이동주, 황현빈
              </div>
              <div>
                &nbsp;<b>웹팀</b> : 박상아, 손민재
              </div>
              <div>
                <b>&nbsp;</b>
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
                  수요일(12/2) 야자 1교시 부터 입사와 관련된 안내가 있을
                  예정입니다터
                </b>
              </div>
              <div>
                &nbsp; - <b>바인드팀은 본인의 의사를 존중합니다. </b>
                바인드 입사의 최종 결정은 부담없이 본인이 판단하시면 되며,
              </div>
              <div>
                바인드에 입사결정이 확고하신 분들은
                <b> 수요일 입사 안내에 참여하시면 됩니다.</b>
              </div>
            </div>
          </div>
        </div>
      </>
      : <>
        <div className={cx('ServiceNoticeTemplate')}>
          <div className={cx('ServiceNoticeModal-Wrapper')} />
          <div className={cx('ServiceNoticeModal')}>
            <div className={cx('ServiceNoticeModal-contents')}>
              지금은 채용 기간이 아닙니다.
            </div>
          </div>

        </div>
      </>
);
};

export default Hire;

import React from 'react';
import './Hire';
import classNames from 'classnames/bind';
import style from './Hire.scss';
import ReactMarkdown from 'react-markdown';

const cx = classNames.bind(style);
const Hire = () => {
  return (
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
              <b>2020 전반기 5기 공개 채용 결과에 대해 안내드립니다.</b>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <b>인턴으로 바인드와 함께 할 학생들은 아래와 같습니다</b>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              &nbsp;<b>서버팀</b> : 박지나
            </div>
            <div>
              &nbsp;<b>모바일팀</b> : 류한규
            </div>
            <div>
              &nbsp;<b>윈도우팀</b> : 박세은, 임경준
            </div>
            <div>
              &nbsp;<b>웹팀</b> : 홍준혁
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <b>[인턴 프로세스 안내]</b>
              <div>
                <b>&nbsp;</b>
              </div>
            </div>
            <div>
              &nbsp;<b> - 기간 </b> : 2020.08.03 ~ 2020.09.28
            </div>
            <div>
              &nbsp;<b> - 내용 </b> : 본인이 지원한 분야에서 팀 프로젝트를
              진행합니다.
            </div>
            {/* <div>
              &nbsp;<b> - 내용 </b> : 주어지는 주제로, 각 플랫폼이 모여 하나의
              토이 프로젝트를 진행합니다.
            </div> */}
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
                일요일(8/2) 15:00에 프로그래밍1실에서 입사와 관련된 안내가 있을
                예정입니다.
              </b>
            </div>
            <div>
              &nbsp; - <b>바인드팀은 본인의 의사를 존중합니다. </b>
              바인드 입사의 최종 결정은 부담없이 본인이 판단하시면 되며,
            </div>
            <div>
              바인드에 입사결정이 확고하신 분들은
              <b> 일요일 입사 안내에 참여하시면 됩니다.</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hire;

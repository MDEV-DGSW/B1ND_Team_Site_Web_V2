import React from 'react';
import './Hire';
import classNames from 'classnames/bind';
import style from './Hire.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { HashRouter } from 'react-router-dom';
import * as Pages from '../../Page';

const cx = classNames.bind(style);
const isHire = true;

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
                바인드 채용 공고
              </div>
              <div className={cx('ServiceNoticeTemplate-header-title-sub')}>
                더 나은 학교를 함께 만들어갈 역량 있는 팀원을 모집합니다.
                <br />
              </div>
            </div>

            <div className={cx('ServiceNoticeTemplate-content-wrap')}>
              <div>
                <b>&nbsp;</b>
              </div>
              <div>안녕하세요, B1ND 팀입니다.</div>
              <div>
                <b>2021 후반기 6기 공개 채용에 대해 안내드립니다.</b>
              </div>
              <div>
                <b>&nbsp;</b>
              </div>
              <div>
                <b>&nbsp;</b>
              </div>
              <div>
                <b>[일정 안내]</b>
              </div>
              <div>
                &nbsp; -
                지원자 접수 및 과제 제출 : 2021년 6월 6일
              </div>
              <div>
                &nbsp; -
                면접 : 추후 안내
              </div>
              <div>
                &nbsp; -
                결과 발표 : 추후 안내
              </div>

              <div>
                <b>&nbsp;</b>
              </div>
              <div>
                <b>[과제]</b>
              </div>
              <div>
                &nbsp;
                아래 희망하는 분야의 다운로드 버튼을 눌러주세요.
              </div>
              <div>
                &nbsp; -
                <a className={cx('Hire-Problem')} href='https://bit.ly/34F8c0p'> Web 팀 과제 다운받기</a>
              </div>
              <div>
                &nbsp; -
                <a className={cx('Hire-Problem')} href='https://bit.ly/3wVPk9D'> Server팀 과제 다운받기</a>
              </div>
              <div>
                &nbsp; -
                <a className={cx('Hire-Problem')} href='https://bit.ly/3yYKLNm'> Mobile 팀 과제 다운받기</a>
              </div>

              <div>
                <b>&nbsp;</b>
              </div>
              <div>
                <b>[신청 안내]</b>
              </div>
              <div>
                &nbsp;
                아래 이메일로 학년, 반, 번호, 이름을 적어서 보내주세요.
              </div>
              <div>
                &nbsp;
                <a className='Hire-Email' href='mailto:jungbin4337@dgsw.hs.kr'>jungbin4337@dgsw.hs.kr</a>
              </div>

              <div>
                <b>&nbsp;</b>
              </div>
              <div>
                <b>[제목]</b>
              </div>
              <div>
                &nbsp;
                바인드 6기 공채지원_신중빈
              </div>

              <div>
                <b>&nbsp;</b>
              </div>
              <div>
                <b>[내용]</b>
              </div>
              <div>
                &nbsp;
                학번 : 2210
              </div>
              <div>
                &nbsp;
                이름 : 신중빈
              </div>
              <div>
                &nbsp;
                지원하고 싶은 분야 : (이곳에 작성한 분야와 과제 제출 분야가 달라도 괜찮음)
              </div>
              <div>
                &nbsp;
                (과제 파일을 첨부해주세요)
              </div>
              <div>
                &nbsp;
              </div>

              <div>
                <b>[지원 자격]</b>
              </div>
              <div>
                &nbsp; -
                실행력이 강한 사람
              </div>
              <div>
                &nbsp; -
                새로운 도전을 좋아하는 사람
              </div>
              <div>
                &nbsp; -
                팀원과 소통을 중요하게 생각하는 사람
              </div>
              <div>
                &nbsp; -
                팀워크를 사랑하는 사람
              </div>
              <div>
                &nbsp; -
                팀의 성장이 나의 성장이라고 생각하는 사람
              </div>
              <div>
                &nbsp; -
                팀과 함께 성장해 나갈 사람
              </div>
              <div>
                <b>&nbsp;</b>
              </div>

              <div>
                <b>[과제 안내]</b>
              </div>
              <div>
                &nbsp; -
                위에 있는 링크를 통해 희망하는 분야 과제를 다운받고 이메일로 제출해주세요.
              </div>
              <div>
                &nbsp; -
                프로그램 기능의 완성도보다 코드의 퀄리티를 더 중요하게 생각합니다.
              </div>
              <div>
                &nbsp; -
                완성되지 않아도 괜찮아요. (과제 제출한 사람을 대상으로 면접을 진행합니다.)
              </div>
              <div>
                <b>&nbsp;</b>
              </div>

              <div>
                <b>[6기 채용 관련 사항]</b>
              </div>
              <div>
                &nbsp; -
                고용 형태 : 인턴 (채용 연계형 인턴십)
              </div>
              <div>
                &nbsp; -
                인턴십 결과에 따라 정식 팀원이 결정됩니다. 꼭 읽어주세요!
              </div>
              <div>
                &nbsp; -
                5기는 정규직 채용, 6기는 인턴 채용입니다.
              </div>
              <div>
                &nbsp; -
                5기의 경우 웹만 신청할 수 있으며, 2021 마지막 공채입니다.
              </div>
              <div className='Hire-important'>
                &nbsp; -
                <b> 실력보다 인성 위주로 채용합니다.</b>
              </div>

              {/* <div>
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
              </div> */}
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

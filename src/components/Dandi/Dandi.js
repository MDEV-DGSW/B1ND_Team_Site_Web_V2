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
            단디 프로젝트 인원은 채용과 달리 바인드 팀에 소속되지 않음을 알립니다.
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
              <b>2021 1학기 6기 단디 프로젝트 면접 일정에 대해 안내드립니다.</b>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <b>단디 프로젝트는 바인드 공식 채용과는 다르게, <br />바인드팀 안에서 선배들과 함께 지내고 배우면서 6기의 성장을 돕는 프로젝트입니다.</b>
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
              &nbsp; - <b>지원자 접수 : </b>
              2021년 3월 21일 21:00 까지
            </div>
            <div>
              &nbsp; - <b>면접 일정 : </b>
              3월 24일(수) 10-11교시
            </div>
            <div>
              &nbsp; - <b>결과 발표 : </b>
              추후 안내
            </div>
            <div>
              &nbsp; - <b>모집 인원 : </b>
              약 10명 내외
            </div>
            <div>
              &nbsp; - <b>운영 기간 : </b>
              정식 채용전 까지 (6 ~ 7월 예정)
            </div>
            <div>
              &nbsp; - <b>운영 형태 : </b>
              합격자 대상으로 협의 후 진행>
            <div>
              &nbsp;
            </div>
            <div>
              &nbsp;
            </div>

            <div>
              <b>[지원 방법]</b>
              <br />
              &nbsp;
              &nbsp;
              <b>jungbin4337@dgsw.hs.kr</b>로 단디 프로젝트 모집 지원_[학반번호][이름]을 적어서 보내주세요.
              <div>
                <b>&nbsp;</b>
              </div>
            </div>

            <div>
              <b>[제목]</b>
              <br />
              &nbsp;
              단디 프로젝트 모집 지원_2210신중빈
              <div>
                <b>&nbsp;</b>
              </div>
            </div>

            <div>
              <b>[내용]</b>
              <br/>
                &nbsp;학번 : 2210
                <br/>
                &nbsp;이름 : 신중빈
                <br/>
                &nbsp;각오 : 열심히 하겠습니다.
                <br/>
                &nbsp;참고 자료(선택) : 사진, PPT(5장 이내), 블로그, 깃허브 등
              <div>
                <b>&nbsp;</b>
              </div>
            </div>

            <div>
              <b>[지원 자격]</b>
              <br/>
              &nbsp;
              대구 소프트웨어 마이스터 고등학교 재학중인 1학년              
              <div>
                <b>&nbsp;</b>
              </div>
            </div>


          </div>
        </div>

      </div>
    </>
  )
}

export default Dandi;
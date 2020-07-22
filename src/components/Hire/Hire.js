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
          <div className={cx('ServiceNoticeTemplate-wrap-logo')}>
            {/* <img className={cx('ServiceNoticeTemplate-wrap-logo-img')} src={DODAM_LOGO} alt={'dodamdodam_logo'} onClick={() => {
            handleRemoveLS();
            history.push('/');
          }}/> */}
          </div>
        </div>
        <div className={cx('ServiceNoticeTemplate-contents')}>
          <div className={cx('ServiceNoticeTemplate-header-title')}>
            <div className={cx('ServiceNoticeTemplate-header-title-text')}>
              바인드 채용 공고
            </div>
            <div className={cx('ServiceNoticeTemplate-header-title-sub')}>
              더 나은 학교를 함께 만들어갈 역량 있는 팀원을 모집합니다.
            </div>
          </div>

          <div className={cx('ServiceNoticeTemplate-content-wrap')}>
            <div>
              <b>[일정 안내]</b>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div> &nbsp;- 지원자 접수 : 2020년 07월 23일 21:00 까지</div>
            <div> &nbsp;- 과제 제출 : 2020년 7월 23일 ~ 26일 23:59 까지</div>
            <div>
              &nbsp;- 면접 : 2020년 7월 28일 8, 9, 10, 11교시 (면접 순서는 추후
              안내)
            </div>
            <div>
              &nbsp;- 결과 발표 : 2020년 7월 29일 (채용 페이지 안내 랜덤)
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <b>[신청 안내]</b>
            </div>
            <div>&nbsp; </div>
            <div>아래 이메일로 학년 / 반, 번호/ 이름을 적어서 보내주세요.</div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <div>
                <b>[제목]</b> <br /> 바인드 5기 공채지원_이영은
              </div>
              <div>
                <div>
                  <b>&nbsp;</b>
                </div>
                <b>[내용]</b> <br />
                학번 : 2215 <br />
                이름 : 이영은 <br />
                지원하고 싶은 분야 : (이곳에작성한 분야와 과제 제출 플랫폼이
                달라도 괜찮음) <br />
              </div>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <a className="Hire-Email" href="mailto:eun3673@dgsw.hs.kr">
                eun3673@dgsw.hs.kr
              </a>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <b>[지원 자격]</b>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div> &nbsp;- 실행력이 강한 사람</div>
            <div> &nbsp;- 새로운 도전을 좋아하는 사람</div>
            <div> &nbsp;- 팀원과 소통을 중요하게 생각하는 사람</div>
            <div> &nbsp;- 팀워크를 사랑하는 사람</div>
            <div> &nbsp;- 팀의 성장이 나의 성장이라고 생각하는 사람</div>
            <div> &nbsp;- 팀과 함께 성장해 나갈 사람</div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <b>[과제 안내]</b>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              &nbsp; - 이메일로 발송되는 4개의 과제 중 하나를 택하여
              제출해주세요.
            </div>
            <div>
              &nbsp; - 프로그램 기능의 완성도 보다는 코드의 퀄리티를 더 중요하게
              생각합니다.
            </div>
            <div>
              &nbsp; - 완성되지 않아도 괜찮아요. (과제 제출한 사람을 대상으로
              면접을 진행합니다)
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <b>[5기 채용 관련 사항]</b>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>&nbsp; - 고용형태 : 인턴(채용연계형 인턴십)</div>
            <div>
              &nbsp; - 인턴십 수행 후, 우수 성과자에 대해 팀원으로 발령 날 수
              있습니다.
            </div>
            <div>
              &nbsp; - 인턴십 결과에 따라 정식 팀원이 될 수 없습니다. 꼭 읽어
              주세요!
            </div>
            <div> &nbsp; - 4기는 정규직 채용, 5기는 인턴 채용입니다.</div>
            <div> &nbsp; - 4기의 경우 2020년 마지막 공채입니다.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hire;

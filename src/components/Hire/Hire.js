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
            <div> &nbsp;- 지원자 접수 : 2020년 11월 25일 21:00 까지</div>
            <div>
              &nbsp;- 면접 일정 : 추후 안내
            </div>
            <div>
              &nbsp;- 결과 발표 : 2020년 12월 2일 (채용 페이지 안내 랜덤)
            </div>
            <div>
              &nbsp;- 모집 인원 : 10여명 내외
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
              <a className="Hire-Email" href="mailto:eun3673@dgsw.hs.kr">
                eun3673@dgsw.hs.kr
              </a>
            </div>
            <div>
              <b>&nbsp;</b>
            </div>
            <div>
              <div>
                <b>[제목]</b>
            <div>
              <b>&nbsp;</b>
            </div>
                <br /> 바인드 5기 공채지원_이영은
              </div>
              <div>
                <div>
                  <b>&nbsp;</b>
                </div>
                <b>[내용]</b> <br />
                <div>
                  <b>&nbsp;</b>
                </div>
                <div>학번 : 2215</div>
                <div>이름 : 이영은</div>
                <div style ={{ marginBottom: 5 }}>지원하고 싶은 분야 : (예시: Web/Server/Windows/Android/iOS/Design ... )</div>
                <div className="Hire-Portfolio">첨부할 수 있는 포트폴리오가 있으면 보내주세요. (예시: GitHub 프로필, 레쥬메북 ... ) </div>
              </div>
            </div>
            <div>
              <b>&nbsp;</b>
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
            <div style={{color: 'red'}}>*5기 공채와 달리 이번 수시 선발은 실력 위주 선발입니다.</div>
            <div style={{fontWeight: 'bold'}}> &nbsp;- 지원 분야에 대한 이해도가 높은 사람</div>
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
              <b>[우대 사항]</b>
            </div>
            <div>
              <ul>
                <li><b>Web :</b> Web Publishing, Javascript(ES6), Typescript, React.js, MobX, Sass</li>
                <br/>
                <li><b>Android :</b> Kotlin, RxJava2, Retrofit2, Gson, Glide, Dagger2, Koin, 
                    Clean Architecture, MVVM</li>
                <br/>
                <li><b>iOS :</b> Swift, MVVM, ReactorKit, Clean Architecture, RxSwift</li>
                <br/>
                <li><b>Server :</b> MySQL, Node.js, NetWork, Typescript, RestAPI, Modern Javascript, AWS</li>
                <br/>
                <li><b>Window :</b> C#, WPF, UWP, .NET, RestSharp, MVVM</li>
              </ul>
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
            <div>&nbsp; - 고용형태 : 인턴</div>
            <div>
              &nbsp; - 인턴십 수행 후, 우수 성과자에 대해 팀원으로 발령 날 수
              있습니다.
            </div>
            <div>
              &nbsp; - 겨울방학 이전까지 인턴십 수행 후, 우수 성과자에 한해 팀원으로 발령 됩니다.
            </div>
            <div> &nbsp; - 바인드 팀 2020년 마지막 공채입니다.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hire;
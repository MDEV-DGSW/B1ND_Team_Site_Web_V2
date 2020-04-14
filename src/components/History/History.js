import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './History.scss';
import { FaGooglePlay } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { FaCrown, FaChalkboardTeacher } from "react-icons/fa";

const History =()=>{
  
  return(
  <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#0067bc', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #0067bc' }}
    date="2020 ~"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={< />}
  >
    <h3 className="vertical-timeline-element-title">아이디어 좀 내주세요</h3>
    <p>
      배경 색깔을 어떻게 해야할까요.. 이렇게 넣을 수도 있는데.. 안 넣기는 뭔가 허전하고..
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2019"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    icon={<FaGooglePlay />}
  >
    <h3 className="vertical-timeline-element-title">2019.12.
    27</h3>
    <p>
    도담도담 안드로이드 버전(선생님용) 구글플레이스토어 출시
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff', fontSize: '100%' }}
    icon={<GiSandsOfTime />}
  >
    <h3 className="vertical-timeline-element-title">2019.12.
    27</h3>
    <p>
    2019년도 회고 진행, 도서실
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    icon={<IoMdPeople />}
  >
    <h3 className="vertical-timeline-element-title">2019.12.
    23</h3>
    <p>
    제 2회 DEXT 컨퍼런스 개최 및 진행 - 시청각실, 3 세션 진행
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2019.10.30~11.01</h3>
    <p>
    ICT융합엑스포 전시회 부스 운영, 대구EXCO (2학년 도담도담, 1학년 단디)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2019.09.24</h3>
    <p>
    도담도담 안드로이드 버전(학생용) 구글플레이스토어 출시
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2019.07.15</h3>
    <p>
    도담도담서비스 발표회(시청각실, 학생대상)
    </p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2019.07.12</h3>
    <p>
    2019년도 1학기 교내 SW 축제 전시(강당)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2019.04.08</h3>
    <p>
    팀명 변경 - 메신저팀 -> BIND(바인드)팀
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2019.04.08</h3>
    <p>
    디자이너 추천 영입
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2019.04.04</h3>
    <p>
    웹 개발자 추천모집
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2019.03.16</h3>
    <p>
    도담도담 학생생활관리시스템 개발 시작
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2018.12.20</h3>
    <p>
    2019년도 2학기 SW나르샤 축제 전시 - 대구광역시 교육연구정보원
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2018.11.23</h3>
    <p>
    제 1회 DEXT 컨퍼런스 개최 및 진행 - 시청각실, 6 세션 진행
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2018.10.30</h3>
    <p>
    대구시 미래교육포럼 전시회 부스 운영 - 대구 EXCO
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2018.09.13~15</h3>
    <p>
    ICT 융합엑스포 전시회 부스 운영 - 대구 EXCO
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2018.07.23</h3>
    <p>
    8월 10일: 여름방학 개발 진행
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">2018.07.19</h3>
    <p>
    SW 나르샤 프로젝트 발표회 전시 - 교내
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    icon={<FaChalkboardTeacher />}
  >
    <h3 className="vertical-timeline-element-title">2018.02.06</h3>
    <p>
    T-Messenger 개발 발표 - 대상: 전학년, 장소: 시청각실
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2017"
    iconStyle={{ background: '#0067bc', color: '#fff' }}
    icon={<FaCrown />}
  >
    <h3 className="vertical-timeline-element-title">2017.11.29</h3>
    <p>
    1기 선발 11명
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
};

export default History;
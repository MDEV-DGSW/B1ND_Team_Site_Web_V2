import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './History.scss';
import {
  FaGooglePlay, FaLaptopCode, FaBriefcase, FaChrome, FaCrown,
  FaChalkboardTeacher, FaPencilAlt, FaAppStoreIos, FaServer, FaStar, FaClipboardList
} from "react-icons/fa";
import { IoMdPeople, IoIosTimer } from "react-icons/io";
import { MdPool } from "react-icons/md";
import { color } from 'styles/color/color_scheme';

const History = () => {
  // const [seventteen, setSeventeen] = useState(false);
  const [eighteen, setEighteen] = useState(false);
  const [nineteen, setNineteen] = useState(false);
  const [twenty, setTwenty] = useState(false);
  const [twentyOne, setTwentyOne] = useState(false);

  const { primary, lightGray, white } = color;

  return (
    <VerticalTimeline >
      <VerticalTimelineElement style={{ userSelect: 'none' }}
        // contentStyle={{ background: primary, color: white }}
        className="vertical-timeline-element--education"
        date="2017"
        iconStyle={{ background: primary, color: white }}
        icon={<FaCrown />}
      >
        <h3 className="vertical-timeline-element-title">2017.11.29</h3>
        <p>
          1기 선발 11명
        </p>
      </VerticalTimelineElement>
      {/* 
        2018 
        */}
      <VerticalTimelineElement style={{ userSelect: 'none' }}
        date="2018"
        className="vertical-timeline-element--education"
        iconStyle={eighteen ?
          { background: primary, color: white, cursor: 'pointer' }
          : { background: lightGray, color: white, cursor: 'pointer' }}
        icon={<FaChalkboardTeacher />}
        iconOnClick={() => setEighteen(!eighteen)}
      >
        <h3 className="vertical-timeline-element-title">2018.02.06</h3>
        <p>
          T-Messenger 개발 발표 - 대상: 전학년, 장소: 시청각실
        </p>
      </VerticalTimelineElement>
      {eighteen && (
        <>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<IoMdPeople />}
          >
            <h3 className="vertical-timeline-element-title">2018.07.19</h3>
            <p>
              SW 나르샤 프로젝트 발표회 전시 - 교내
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<MdPool />}
          >
            <h3 className="vertical-timeline-element-title">2018.07.23</h3>
            <p>
              8월 10일: 여름방학 개발 진행
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<IoMdPeople />}
          >
            <h3 className="vertical-timeline-element-title">2018.09.13 - 15</h3>
            <p>
              ICT 융합엑스포 전시회 부스 운영 - 대구 EXCO
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<IoMdPeople />}
          >
            <h3 className="vertical-timeline-element-title">2018.10.30</h3>
            <p>
              대구시 미래교육포럼 전시회 부스 운영 - 대구 EXCO
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">2018.11.23</h3>
            <p>
              제 1회 DEXT 컨퍼런스 개최 및 진행 - 시청각실, 6 세션 진행
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<IoMdPeople />}
          >
            <h3 className="vertical-timeline-element-title">2018.12.20</h3>
            <p>
              2019년도 2학기 SW나르샤 축제 전시 - 대구광역시 교육연구정보원
            </p>
          </VerticalTimelineElement>
        </>
      )}
      {/* 
        2019 
      */}
      <VerticalTimelineElement style={{ userSelect: 'none' }}
        date="2019"
        className="vertical-timeline-element--education"
        iconStyle={nineteen ?
          { background: primary, color: white, cursor: 'pointer' }
          : { background: lightGray, color: white, cursor: 'pointer' }}
        icon={<FaLaptopCode />}
        iconOnClick={() => setNineteen(!nineteen)}
      >
        <h3 className="vertical-timeline-element-title">2019.03.16</h3>
        <p>
          도담도담 학생생활관리시스템 개발 시작
        </p>
      </VerticalTimelineElement>
      {nineteen && (
        <>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaPencilAlt />}
          >
            <h3 className="vertical-timeline-element-title">2019.04.08</h3>
            <p>
              팀명 변경 - 메신저팀 -> BIND(바인드)팀
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<IoMdPeople />}
          >
            <h3 className="vertical-timeline-element-title">2019.07.12</h3>
            <p>
              2019년도 1학기 교내 SW 축제 전시(강당)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<IoMdPeople />}
          >
            <h3 className="vertical-timeline-element-title">2019.07.15</h3>
            <p>
              도담도담서비스 발표회(시청각실, 학생대상)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaGooglePlay />}
          >
            <h3 className="vertical-timeline-element-title">2019.09.24</h3>
            <a
              href="https://play.google.com/store/apps/details?id=kr.hs.dgsw.smartschool.dodamdodam"
              target="_blank">
              <p>
                도담도담 안드로이드 버전(학생용) 구글플레이스토어 출시
              </p>
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<IoMdPeople />}
          >
            <h3 className="vertical-timeline-element-title">2019.10.30 - 11.01</h3>
            <p>
              ICT융합엑스포 전시회 부스 운영, 대구EXCO (2학년 도담도담, 1학년 단디)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">2019.12.
              23</h3>
            <p>
              제 2회 DEXT 컨퍼런스 개최 및 진행 - 시청각실, 3 세션 진행
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white, fontSize: '100%' }}
            icon={<IoIosTimer />}
          >
            <h3 className="vertical-timeline-element-title">2019.12.
              27</h3>
            <p>
              2019년도 회고 진행, 도서실
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaGooglePlay />}
          >
            <h3 className="vertical-timeline-element-title">2019.12.
              27</h3>
            <p>
              도담도담 안드로이드 버전(선생님용) 구글플레이스토어 출시
            </p>
          </VerticalTimelineElement>
        </>
      )}
      {/* 
        2020 
      */}
      <VerticalTimelineElement style={{ userSelect: 'none' }}
        date="2020"
        className="vertical-timeline-element--education"
        iconStyle={twenty ?
          { background: primary, color: white, cursor: 'pointer' }
          : { background: lightGray, color: white, cursor: 'pointer' }}
        icon={<FaClipboardList />}
        iconOnClick={() => setTwenty(!twenty)}
      >
        <h3 className="vertical-timeline-element-title">2020.06.05</h3>
        <p>
          도담도담 교내 베타테스트 시작
        </p>
      </VerticalTimelineElement>
      {twenty && (
        <>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaChrome />}
          >
            <h3 className="vertical-timeline-element-title">2020.06.14</h3>
            <a
              href="http://dodam.b1nd.com/"
              target="_blank">
              <p>
                도담도담 정식 릴리즈 출시
              </p>
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<IoMdPeople />}
          >
            <h3 className="vertical-timeline-element-title">2020.11.19 - 11.20</h3>
            <p>
              ICT융합엑스포 전시회 부스 운영, 대구EXCO (2학년 도담도담)
            </p>
          </VerticalTimelineElement>
        </>
      )}
      {/* 
        2021 
      */}
      <VerticalTimelineElement style={{ userSelect: 'none' }}
        date="2021"
        className="vertical-timeline-element--education"
        iconStyle={twentyOne ?
          { background: primary, color: white, cursor: 'pointer' }
          : { background: lightGray, color: white, cursor: 'pointer' }}
        icon={<FaClipboardList />}
        iconOnClick={() => setTwentyOne(!twentyOne)}
      >
        <h3 className="vertical-timeline-element-title">2021.01.20</h3>
        <p>
          도담도담 iOS 버전(학생용) 베타 테스트 시작
        </p>
      </VerticalTimelineElement>
      {twentyOne && (
        <>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaStar />}
          >
            <h3 className="vertical-timeline-element-title">2021.03.16</h3>
            <p>
              단디 프로젝트 도입
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaLaptopCode />}
          >
            <h3 className="vertical-timeline-element-title">2021.03.23</h3>
            <p>
              모람모람 팀빌딩서비스 개발 시작
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaLaptopCode />}
          >
            <h3 className="vertical-timeline-element-title">2021.04.12</h3>
            <p>
              디어스(DAuth) 도담도담 통합 로그인 서비스 개발 시작
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaServer />}
          >
            <h3 className="vertical-timeline-element-title">2021.05.27</h3>
            <p>
              도담도담 외부서버 오픈
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaAppStoreIos />}
          >
            <h3 className="vertical-timeline-element-title">2021.05.30</h3>
            <a
              href="https://apps.apple.com/kr/app/%EB%8F%84%EB%8B%B4%EB%8F%84%EB%8B%B4/id1549451556"
              target="_blank">
              <p>
                도담도담 iOS 버전(학생용) 앱스토어 출시
              </p>
            </a>
          </VerticalTimelineElement>
          <VerticalTimelineElement style={{ userSelect: 'none' }}
            contentStyle={{ background: primary, color: white }}
            className="vertical-timeline-element--education"
            iconStyle={{ background: primary, color: white }}
            icon={<FaChrome />}
          >
            <h3 className="vertical-timeline-element-title">2021.07.05</h3>
            <a
              href="http://dauth.b1nd.com/"
              target="_blank">
              <p style={{ color: white }}>
                디어스(DAuth) 정식 릴리즈 출시
              </p>
            </a>
          </VerticalTimelineElement>
        </>
      )}

    </VerticalTimeline>
  );
};

export default History;
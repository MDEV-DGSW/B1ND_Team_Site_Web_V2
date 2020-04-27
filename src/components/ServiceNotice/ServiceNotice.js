import React, { useState } from 'react';
import './ServiceNotice.scss';
import TeamImg from 'assets/images/Bind.jpg';
import YB from 'assets/images/BIND1.jpg';
import both from 'assets/images/이미지7.jpg';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
// import { FaGithub } from 'react-icons/go';
import { DiPhotoshop } from 'react-icons/di';
import {
  FaCrown,
  FaChrome,
  FaWindows,
  FaServer,
  FaBlog,
  FaApple,
  FaGithub,
  FaMedium,
} from 'react-icons/fa';
import { BsPeopleCircle } from 'react-icons/bs';
import { MdAndroid } from 'react-icons/md';
import { IoLogoChrome, IoIosRocket } from 'react-icons/io';
const ServiceNotice = () => {
  const [fisrt, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  // const [web, setWeb] = useState(false);
  // const [design, setDesign] = useState(false);
  return (
    <>
      <div className="ServiceNotice">
        <div className="ServiceNotice-content">
          {/* 페이지 설명 영역 상단 */}
          <div className="ServiceNotice-content-title">바인드 소개</div>
          <div className="ServiceNotice-content-info">
            바인드 팀은 스마트 스쿨을 관리하고 더욱 발전된 서비스를 제공하기
            위해 변화를 추구하며, <br />
            수많은 학생들이 개발에 자신감을 가지고 경쟁력을 키우며 다가올 미래를
            준비할 수 있도록 앞장서겠습니다.
          </div>
          <div className="ServiceNotice-content-img">
            <img
              src={YB}
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '100%',
              }}
              alt={TeamImg}
            />
          </div>
        </div>
        <div className="containerWrap">
          <div className="ServiceNotice-infoContent">
            <div className="ServiceNotice-infoContent-container">
              <div class="content_box">
                <dl>
                  <dt className="ServiceNotice-infoContent-container-left">
                    <b className="ServiceNotice-infoContent-container-left-BIND">
                      BIND
                    </b>
                  </dt>
                  <dd className="ServiceNotice-infoContent-container-right">
                    <p>
                      바인드 팀은 스마트 스쿨을 관리하고 더욱 발전된 서비스를
                      제공하기 위해 변화를 추구하며, 수많은 학생들이 개발에
                      자신감을 가지고 경쟁력을 키우며 다가올 미래를 준비할 수
                      있도록 앞장서겠습니다.
                    </p>
                  </dd>
                </dl>
              </div>
              <div class="content_box2">
                <dl>
                  <dt className="ServiceNotice-infoContent-container-left">
                    BIND PM/PL
                  </dt>
                  <dd className="ServiceNotice-infoContent-container-right">
                    <table class="ServiceNotice-infoContent-container-right-table">
                      <tbody>
                        <tr className="ServiceNotice-infoContent-container-right-table-first trc">
                          <th scope="row" className="PRPL">
                            Chris Kim (김완태)
                          </th>
                          <td style={{ padding: '20px 0px 20px 0px' }}>
                            기업근무 2003 ~ 2016년 <br /> Microsoft MVP 2014,
                            2015, 2016, 2017, 2018년 수상 <br />
                            현재 Microsoft MVP Reconnect
                            <br /> 대구소프트웨어고등학교
                            산학겸임교사/나르샤강사 2016 ~ 현재
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </dd>
                </dl>
              </div>
              <div class="content_box2">
                <dl>
                  <dt className="ServiceNotice-infoContent-container-left">
                    <b className="ServiceNotice-infoContent-container-left-BIND">
                      BIND
                    </b>
                    <br /> MEMBER
                  </dt>
                  <dd className="ServiceNotice-infoContent-container-right">
                    <table class="ServiceNotice-infoContent-container-right-table">
                      <tbody>
                        {/* <tr className="ServiceNotice-infoContent-container-right-table-firstBold">
                          <th scope="row">기수</th>
                          <th scope="row">이름</th>
                          <th scope="row">담당업무</th>
                        </tr> */}
                        <tr
                          className="ServiceNotice-infoContent-container-right-table-firstBold right"
                          onClick={() => setFourth(!fourth)}
                        >
                          <th scope="row">4기</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {fourth ? (
                              <>
                                <MdKeyboardArrowUp className="right-icon" />{' '}
                              </>
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {fourth ? (
                          <>
                            <tr>
                              <th scope="row">강민석</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaApple />
                                </div>
                                <div className="trc-string"> iOS Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/devMinseok"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://axe-num1.tistory.com/"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">곽준환</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <DiPhotoshop />
                                </div>
                                <div className="trc-string"> Designer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/Gwak-Jun-Hwan"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://www.rocketpunch.com/@kwakjunhwan"
                                    target="_blank"
                                  >
                                    <IoIosRocket />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">권순관</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Front-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/SoonGwan"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://blog.naver.com/gamawoo197"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>
                                  <a
                                    href="https://medium.com/@gamawoo10"
                                    target="_blank"
                                  >
                                    <FaMedium />
                                  </a>
                                  <a
                                    href="https://www.rocketpunch.com/@77530e03b7dc4d75"
                                    target="_blank"
                                  >
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">권용빈</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Front-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/yiyb0603"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://blog.naver.com/yiyb0603"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김경훈</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/KyungHoon0126"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://blog.naver.com/kkh03kkh"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김성헌</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="" target="_blank">
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김주엽</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/Kim-Ju-Yeop"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://juyeop.tistory.com"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김혜선</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Front-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="" target="_blank">
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">박 진</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/flaw5886"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://blog.naver.com/parkjin0318"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">여동민</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/hvboq"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://op-op.tistory.com/"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>
                                  <a
                                    href="https://www.rocketpunch.com/@113aa2cea1ca4a85"
                                    target="_blank"
                                  >
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">오하형</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Front-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/maryoh2003"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://blog.naver.com/maryoh2002"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">이영은</div>{' '}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/Monsteel"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="http://monsteel.github.io"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">최진우</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Back-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/Choi-jinwoo"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="http://blog.wlswoo.com"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                        <tr
                          className="ServiceNotice-infoContent-container-right-table right"
                          onClick={() => setThird(!third)}
                        >
                          <th scope="row">3기</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {third ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {third ? (
                          <>
                            <tr>
                              <th scope="row">고현석</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">권선국</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Front-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="" target="_blank">
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김원빈</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Front-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김태오</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/Sunday5214"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://sunday5214.tistory.com/"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김현재</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">나동혁</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">노민희</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaApple />
                                </div>
                                <div className="trc-string"> iOS Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">류재정</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Front-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">박건우</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">오해성</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Back-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">이유승</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/leeyouseung"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a href="" target="_blank">
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">이진영</div>{' '}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Back-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/wlsdud2194"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://velog.io/@wlsdud2194"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>{' '}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">전광용</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Back-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/DevJeon1358"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://velog.io/@devjeon1358"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>
                                  <a href="http://devjeon.xyz" target="_blank">
                                    <BsPeopleCircle />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">최석준</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Front-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/boggil"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://blog.naver.com/ghdudwlwns"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>
                                  <a
                                    href="https://www.rocketpunch.com/@tjrwns1217"
                                    target="_blank"
                                  >
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">추명호</div>{' '}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Front-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a
                                    href="https://github.com/ttingho"
                                    target="_blank"
                                  >
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://ttingho.tistory.com"
                                    target="_blank"
                                  >
                                    <FaBlog />
                                  </a>
                                  <a
                                    href="https://www.rocketpunch.com/@ttingho"
                                    target="_blank"
                                  >
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">황보민</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">황유신</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <DiPhotoshop />
                                </div>
                                <div className="trc-string"> Designer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                        <tr
                          className="ServiceNotice-infoContent-container-right-table right"
                          onClick={() => setSecond(!second)}
                        >
                          <th scope="row">2기</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {second ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {second ? (
                          <>
                            <tr>
                              <th scope="row">강서연</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Back-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김민찬</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김성훈</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김시아</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Back-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김준영</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김지오</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">나해인</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <DiPhotoshop />
                                </div>
                                <div className="trc-string"> Designer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">남형진</div>{' '}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">민경빈</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Front-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">박태형</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Back-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">서진혁</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Front-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">우현진</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaApple />
                                </div>
                                <div className="trc-string"> iOS Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">이동엽</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">이효성</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                        <tr
                          className="ServiceNotice-infoContent-container-right-table right"
                          onClick={() => setFirst(!fisrt)}
                        >
                          <th scope="row">1기</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {fisrt ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {fisrt ? (
                          <>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">김대용</div>{' '}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">서동혁</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">서정민</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">오동헌</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <DiPhotoshop />
                                </div>
                                <div className="trc-string"> Designer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">유민서</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">이소진</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Window Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">이지헌</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">정동형</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">정성화</div>{' '}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Android Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">정한나</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Back-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">최영훈</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string">
                                  {' '}
                                  Back-end Developer
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefaultDisable">
                                  {/* <a href="" target="_blank"> */}
                                  <FaGithub />
                                  {/* </a> */}
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </table>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceNotice;

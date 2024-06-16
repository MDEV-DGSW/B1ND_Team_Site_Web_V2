import React, { useState } from "react";
import "./ServiceNotice.scss";
import TeamImg from "assets/images/Bind.jpg";
import YB from "assets/images/BIND1.jpg";
import both from "assets/images/이미지7.jpg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// import { FaGithub } from 'react-icons/go';
import { DiPhotoshop } from "react-icons/di";
import {
  FaCrown,
  FaChrome,
  FaWindows,
  FaServer,
  FaBlog,
  FaApple,
  FaGithub,
  FaMedium,
  FaRocket,
  FaLinkedin,
  FaAndroid,
} from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import { BsPeopleCircle } from "react-icons/bs";
import { MdAndroid } from "react-icons/md";
import { IoLogoChrome, IoIosRocket } from "react-icons/io";
const ServiceNotice = () => {
  const [fisrt, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);
  const [seventh, setSeventh] = useState(false);
  const [eighth, setEighth] = useState(false);
  // const [web, setWeb] = useState(false);
  // const [design, setDesign] = useState(false);

  return (
    <>
      <div className="ServiceNotice">
        <div className="ServiceNotice-content">
          {/* 페이지 설명 영역 상단 */}
          <div className="ServiceNotice-content-title">바인드 소개</div>
          <div className="ServiceNotice-content-info">
            바인드 팀은 스마트 스쿨을 관리하고 더욱 발전된 서비스를 제공하기 위해 변화를 추구하며,{" "}
            <br />
            수많은 학생들이 개발에 자신감을 가지고 경쟁력을 키우며 다가올 미래를 준비할 수 있도록
            앞장서겠습니다.
          </div>
          <div className="ServiceNotice-content-img">
            <img
              src={YB}
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
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
                    <b className="ServiceNotice-infoContent-container-left-BIND">BIND</b>
                  </dt>
                  <dd className="ServiceNotice-infoContent-container-right">
                    <p>
                      바인드 팀은 스마트 스쿨을 관리하고 더욱 발전된 서비스를 제공하기 위해 변화를
                      추구하며, 수많은 학생들이 개발에 자신감을 가지고 경쟁력을 키우며 다가올 미래를
                      준비할 수 있도록 앞장서겠습니다.
                    </p>
                  </dd>
                </dl>
              </div>
              <div class="content_box2">
                <dl>
                  <dt className="ServiceNotice-infoContent-container-left">BIND PM/PL</dt>
                  <dd className="ServiceNotice-infoContent-container-right">
                    <table class="ServiceNotice-infoContent-container-right-table">
                      <tbody>
                        <tr className="ServiceNotice-infoContent-container-right-table-first trc">
                          <th scope="row" className="PRPL">
                            Chris Kim
                          </th>
                          <td style={{ padding: "20px 0px 20px 0px" }}>
                            기업근무 2003 ~ 2016년 <br /> Microsoft MVP 2014, 2015, 2016, 2017,
                            2018년 수상 <br />
                            현재 Microsoft MVP Reconnect
                            <br /> 대구소프트웨어고등학교 산학겸임교사/나르샤강사 2016 ~ 현재
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
                    <b className="ServiceNotice-infoContent-container-left-BIND">BIND</b>
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
                          className="ServiceNotice-infoContent-container-right-table-firstBold"
                          onClick={() => setEighth(!eighth)}
                        >
                          <th scope="row">8기</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {eighth ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {eighth ? (
                          <>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">김가영</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/GayeongKimm" target="_blank">
                                    <FaGithub />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">김동찬</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/dongchandev" target="_blank">
                                    <FaGithub />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">박병준</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/8954sood" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@8954sood" target="_blank">
                                    <FaBlog />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">박시현</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/developersihyeon" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@s1_hyun/posts" target="_blank">
                                    <FaBlog />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">이강연</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaApple />
                                </div>
                                <div className="trc-string"> iOS Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/bestswlkh0310" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="http://hhhello.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">이윤채</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaApple />
                                </div>
                                <div className="trc-string"> iOS Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/leeyoonchae" target="_blank">
                                    <FaGithub />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">이해준</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/ftery0" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@ftery0/posts" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@HaeJun" target="_blank">
                                    <IoIosRocket />
                                  </a>
                                  <a href="https://www.linkedin.com/in/erb-l-465001314/" target="_blank">
                                    <FaLinkedin />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">조영우</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaApple />
                                </div>
                                <div className="trc-string"> iOS Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/jyw28" target="_blank">
                                    <FaGithub />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">전민찬</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/wjzlskxk" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@wjzlskxk/posts" target="_blank">
                                    <FaBlog />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">한준혁</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/wnsgur1" target="_blank">
                                    <FaGithub />
                                  </a>
                                </div>
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                         
                        <tr onClick={() => setSeventh(!seventh)}>
                          <th scope="row">7기</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {seventh ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {seventh ? (
                          <>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">도현욱</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/wsi1212" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@wsi1212" target="_blank">
                                    <FaBlog />
                                  </a>
                                  {/* <a href="https://www.rocketpunch.com/@ryuhangyu" target="_blank">
                                    <IoIosRocket />
                                  </a> */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">박상현</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/Sanghyun0505" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@doldory55" target="_blank">
                                    <FaBlog />
                                  </a>
                                  {/* <a href="https://www.rocketpunch.com/@ryuhangyu" target="_blank">
                                    <IoIosRocket />
                                  </a> */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">백승하</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/baekseungha" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://100log.vercel.app/" target="_blank">
                                    <FaBlog />
                                  </a>
                                  {/* <a href="https://www.rocketpunch.com/@ryuhangyu" target="_blank">
                                    <IoIosRocket />
                                  </a> */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">윤석규</div>{" "}
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/SeokgyuYun" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@yun_seokgyu" target="_blank">
                                    <FaBlog />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">이민규</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaApple />
                                </div>
                                <div className="trc-string">iOS Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/Mingyuuu0108" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://min-gyu.notion.site/iOS-9d31caa6a9bc433e884ba7b8df6135ab"
                                    target="_blank"
                                  >
                                    <BsPeopleCircle />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">이석호</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaApple />
                                </div>
                                <div className="trc-string"> iOS Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/Mercen-Lee" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://mercenary.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@mercen" target="_blank">
                                    <IoIosRocket />
                                  </a>
                                  <a href="https://portfolio.mercen.net/" target="_blank">
                                    <BsPeopleCircle />
                                  </a>
                                  <a
                                    href="https://www.linkedin.com/in/mercen-lee-08965a242/"
                                    target="_blank"
                                  >
                                    <FaLinkedin />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">이지민</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/leeggmin" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://leeggmin.tistory.com" target="_blank">
                                    <FaBlog />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">전해림</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/HAERIM0" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://m.blog.naver.com/sun_rim" target="_blank">
                                    <FaBlog />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">최수원</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/suw0n" target="_blank">
                                    <FaGithub />
                                  </a>
                                </div>
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}

                        <tr onClick={() => setSixth(!sixth)}>
                          <th scope="row">6기</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {sixth ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {sixth ? (
                          <>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">기 준</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/june3011" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@june0623" target="_blank">
                                    <FaBlog />
                                  </a>
                                  {/* <a href="https://www.rocketpunch.com/@ryuhangyu" target="_blank">
                                    <IoIosRocket />
                                  </a> */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">금현호</div>{" "}
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/nrbns357" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://nrbns.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>
                                  {/* <a href="https://www.rocketpunch.com/@ryuhangyu" target="_blank">
                                    <IoIosRocket />
                                  </a> */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">김도현</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/kdh1123" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://cwwhyeon.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>
                                  {/* <a href="https://www.rocketpunch.com/@ryuhangyu" target="_blank">
                                    <IoIosRocket />
                                  </a> */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">김상은</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaApple />
                                </div>
                                <div className="trc-string"> iOS Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/SangAu124" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@sangau124" target="_blank">
                                    <FaBlog />
                                  </a>
                                  {/* <a href="https://www.rocketpunch.com/@ryuhangyu" target="_blank">
                                    <IoIosRocket />
                                  </a> */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">김준호</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/rlawnsgh714" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://rumarul-coding.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a
                                    href="https://www.rocketpunch.com/@junho07140714"
                                    target="_blank"
                                  >
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">우준성</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/whitebear05" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://white-world.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@woojs0505" target="_blank">
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">임동현</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/ldh3907" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@ldh3907" target="_blank">
                                    <FaBlog />
                                  </a>
                                  {/* <a href="https://www.rocketpunch.com/@woojs0505" target="_blank">
                                    <IoIosRocket />
                                  </a> */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">최민재</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/snack655" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://ssnack655.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@cmjcmj1230" target="_blank">
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}

                        <tr onClick={() => setFifth(!fifth)}>
                          <th scope="row">5기</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {fifth ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {fifth ? (
                          <>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">류한규</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/zxcmnb05" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@zxcmnb05" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@ryuhangyu" target="_blank">
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">박상아</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/ivory0312" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://ivory0312.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@sangah0312" target="_blank">
                                    <IoIosRocket />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">박세은</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaApple />
                                </div>
                                <div className="trc-string"> iOS Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/prs176" target="_blank">
                                    <FaGithub />
                                  </a>
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog className="trc-defaultIcons" />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">박지나</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/pjn141414" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://1o7o1q.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@jina071049" target="_blank">
                                    <IoIosRocket />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">사승은</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/Silver-Deer" target="_blank">
                                    <FaGithub />
                                  </a>
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog className="trc-defaultIcons" />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">손민재</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/Clzzi" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@jce1407" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@clzzi1109" target="_blank">
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">신중빈</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/krung2" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@krung2" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@888129f6" target="_blank">
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">이동주</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string"> Window Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/dannyldj" target="_blank">
                                    <FaGithub />
                                  </a>
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog className="trc-defaultIcons" />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">전해윤</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/godbs129" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@godbs129" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@junhaeyoon" target="_blank">
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">천승희</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/cjstmdgml" target="_blank">
                                    <FaGithub />
                                  </a>
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog className="trc-defaultIcons" />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">홍준혁</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/Hong-JunHyeok" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://hong-jh.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">황현빈</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/HYE0N1127" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="hyeon1127.tistory.com" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://velog.io/@hhb041127" target="_blank">
                                    <RiCodeSSlashLine />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@hyeonbin" target="_blank">
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}

                        <tr onClick={() => setFourth(!fourth)}>
                          <th scope="row">4기</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {fourth ? (
                              <>
                                <MdKeyboardArrowUp className="right-icon" />{" "}
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
                                  <a href="https://github.com/devMinseok" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://axe-num1.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>{" "}
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
                                  <a href="https://github.com/Gwak-Jun-Hwan" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <FaBlog className="trc-defaultIcons" />
                                  <a
                                    href="https://www.rocketpunch.com/@kwakjunhwan"
                                    target="_blank"
                                  >
                                    <IoIosRocket />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">권순관</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/SoonGwan" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a
                                    href="https://www.rocketpunch.com/@77530e03b7dc4d75"
                                    target="_blank"
                                  >
                                    <IoIosRocket />
                                  </a>
                                  <a
                                    href="https://www.linkedin.com/in/%EC%88%9C%EA%B4%80-%EA%B6%8C-6a945819a/"
                                    target="_blank"
                                  >
                                    <FaLinkedin />
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
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/yiyb0603" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://blog.naver.com/yiyb0603" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://velog.io/@yiyb0603" target="_blank">
                                    <RiCodeSSlashLine />
                                  </a>
                                  <a
                                    href="https://www.rocketpunch.com/@513886f28e2b4088"
                                    target="_blank"
                                  >
                                    <IoIosRocket />
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
                                <div className="trc-string"> Window Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/KyungHoon0126" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://blog.naver.com/kkh03kkh" target="_blank">
                                    <FaBlog />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김성헌</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string"> Window Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/Seongheon03" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://blog.naver.com/kshksh825" target="_blank">
                                    <FaBlog />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김주엽</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/Kim-Ju-Yeop" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://juyeop.tistory.com" target="_blank">
                                    <FaBlog />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김혜선</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/hyess210" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://sunnytdy.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">박 진</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/flaw5886" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://blog.naver.com/parkjin0318" target="_blank">
                                    <FaBlog />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">여동민</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string"> Window Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/hvboq" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://op-op.tistory.com/" target="_blank">
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
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/maryoh2003" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://blog.naver.com/maryoh2002" target="_blank">
                                    <FaBlog />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">이영은</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/Monsteel" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="http://monsteel.github.io" target="_blank">
                                    <FaBlog />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">최진우</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/Choi-jinwoo" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="http://wlswoo.tistory.com" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a
                                    href="https://www.rocketpunch.com/@chlwlsdn0828"
                                    target="_blank"
                                  >
                                    <IoIosRocket />
                                  </a>
                                  <a
                                    href="https://www.notion.so/wlswoo/Choi-Jinwoo-1d12bbc71f7f45e590ed199629372769"
                                    target="_blank"
                                  >
                                    <BsPeopleCircle />
                                  </a>
                                </div>
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}

                        <tr onClick={() => setThird(!third)}>
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
                                <div className="trc-string"> Android Developer</div>
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
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/gguggu" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <FaBlog className="trc-defaultIcons" />
                                  <a
                                    href="https://www.rocketpunch.com/@abebc24d7651439a"
                                    target="_blank"
                                  >
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김원빈</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
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
                                <div className="trc-string"> Window Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/Sunday5214" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://sunday5214.tistory.com/" target="_blank">
                                    <FaBlog />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">김현재</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
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
                                <div className="trc-string"> Android Developer</div>
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
                                <div className="trc-string"> Front-end Developer</div>
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
                                <div className="trc-string"> Android Developer</div>
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
                                <div className="trc-string"> Back-end Developer</div>
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
                                <div className="trc-string"> Android Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/leeyouseung" target="_blank">
                                    <FaGithub />
                                  </a>
                                  {/* <a href="" target="_blank"> */}
                                  <FaBlog className="trc-defaultIcons" />
                                  {/* </a>{' '} */}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">이진영</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/wlsdud2194" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@wlsdud2194" target="_blank">
                                    <FaBlog />
                                  </a>{" "}
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">전광용</th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaServer />
                                </div>
                                <div className="trc-string"> Back-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/DevJeon1358" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://velog.io/@devjeon1358" target="_blank">
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
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/boggil" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://blog.naver.com/ghdudwlwns" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@tjrwns1217" target="_blank">
                                    <IoIosRocket />
                                  </a>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="trc-name">추명호</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <IoLogoChrome />
                                </div>
                                <div className="trc-string"> Front-end Developer</div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault">
                                  <a href="https://github.com/ttingho" target="_blank">
                                    <FaGithub />
                                  </a>
                                  <a href="https://ttingho.tistory.com" target="_blank">
                                    <FaBlog />
                                  </a>
                                  <a href="https://www.rocketpunch.com/@ttingho" target="_blank">
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
                                <div className="trc-string"> Window Developer</div>
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

                        <tr onClick={() => setSecond(!second)}>
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
                                <div className="trc-string"> Back-end Developer</div>
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
                                <div className="trc-string"> Window Developer</div>
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
                                <div className="trc-string"> Window Developer</div>
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
                                <div className="trc-string"> Back-end Developer</div>
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
                                <div className="trc-string"> Window Developer</div>
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
                                <div className="trc-string"> Android Developer</div>
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
                                <div className="trc-name">남형진</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string"> Window Developer</div>
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
                                <div className="trc-string"> Front-end Developer</div>
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
                                <div className="trc-string"> Back-end Developer</div>
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
                                <div className="trc-string"> Front-end Developer</div>
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
                                <div className="trc-string"> Window Developer</div>
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
                                <div className="trc-string"> Window Developer</div>
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

                        <tr onClick={() => setFirst(!fisrt)}>
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
                                <div className="trc-name">김대용</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <FaWindows />
                                </div>
                                <div className="trc-string"> Window Developer</div>
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
                                <div className="trc-string"> Android Developer</div>
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
                                <div className="trc-string"> Window Developer</div>
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
                                <div className="trc-string"> Window Developer</div>
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
                                <div className="trc-string"> Window Developer</div>
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
                                <div className="trc-string"> Android Developer</div>
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
                                <div className="trc-string"> Android Developer</div>
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
                                <div className="trc-name">정성화</div>{" "}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <div className="trc-icondefault1">
                                  <MdAndroid />
                                </div>
                                <div className="trc-string"> Android Developer</div>
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
                                <div className="trc-string"> Back-end Developer</div>
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
                                <div className="trc-string"> Back-end Developer</div>
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

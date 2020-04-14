import React, { useState } from 'react';
import './ServiceNotice.scss';
import TeamImg from 'assets/images/Bind.jpg';
import YB from 'assets/images/BIND1.jpg';
import both from 'assets/images/이미지7.jpg';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { GoOctoface } from 'react-icons/go';
import { FaCrown } from 'react-icons/fa';
const ServiceNotice = () => {
  const [server, setServer] = useState(false);
  const [window, setWindow] = useState(false);
  const [android, setAndroid] = useState(false);
  const [ios, setIos] = useState(false);
  const [web, setWeb] = useState(false);
  const [design, setDesign] = useState(false);
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
                    TEAM
                    <br /> PROFILE
                  </dt>
                  <dd className="ServiceNotice-infoContent-container-right">
                    <table class="ServiceNotice-infoContent-container-right-table">
                      <tbody>
                        <tr className="ServiceNotice-infoContent-container-right-table-first trc">
                          <th scope="row">설립연도</th>
                          <td>2017년 01월 08일</td>
                        </tr>
                        <tr className="trc">
                          <th scope="row">설립연도</th>
                          <td>2017년 01월 08일</td>
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
                          onClick={() => setServer(!server)}
                        >
                          <th scope="row">Server</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {server ? (
                              <>
                                <MdKeyboardArrowUp className="right-icon" />{' '}
                              </>
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {server ? (
                          <>
                            <tr>
                              <th scope="row">1기</th>
                              <th scope="row">정한나</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">1기</th>
                              <th scope="row">최영훈</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">박태형</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">김시아</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">강서연</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3기</th>
                              <th scope="row">
                                <div className="trc-name">이진영</div>{' '}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3기</th>
                              <th scope="row">전광용</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3기</th>
                              <th scope="row">오해성</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4기</th>
                              <th scope="row">최진우</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                        <tr
                          className="ServiceNotice-infoContent-container-right-table right"
                          onClick={() => setWindow(!window)}
                        >
                          <th scope="row">Windows</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {window ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {window ? (
                          <>
                            <tr>
                              <th scope="row">1기</th>
                              <th scope="row">
                                <div style={{ verticalAlign: 'middle' }}>
                                  <div className="trc-name">김대용</div>{' '}
                                  <div className="trc-icon">
                                    <FaCrown />
                                  </div>
                                </div>
                              </th>

                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">1기</th>
                              <th scope="row">서정민</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">1기</th>
                              <th scope="row">이소진</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">1기</th>
                              <th scope="row">유민서</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">김민찬</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">김준영</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">
                                <div className="trc-name">남형진</div>{' '}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">이효성</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">이동엽</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">김성훈</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3기</th>
                              <th scope="row">김태오</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3기</th>
                              <th scope="row">황보민</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4기</th>
                              <th scope="row">김경훈</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4.5기</th>
                              <th scope="row">김성헌</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4.5기</th>
                              <th scope="row">여동민</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                        <tr
                          className="ServiceNotice-infoContent-container-right-table right"
                          onClick={() => setAndroid(!android)}
                        >
                          <th scope="row">Android</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {android ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {android ? (
                          <>
                            <tr>
                              <th scope="row">1기</th>
                              <th scope="row">서동혁</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">1기</th>
                              <th scope="row">이지헌</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">1기</th>
                              <th scope="row">정동형</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">
                                <div className="trc-name">정성화</div>{' '}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">김지오</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3기</th>
                              <th scope="row">나동혁</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3기</th>
                              <th scope="row">박건우</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3.5기</th>
                              <th scope="row">김현재</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3.5기</th>
                              <th scope="row">고현석</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3.5기</th>
                              <th scope="row">이유승</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4기</th>
                              <th scope="row">이영은</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4기</th>
                              <th scope="row">김주엽</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4.5기</th>
                              <th scope="row">박 진</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                        <tr
                          className="ServiceNotice-infoContent-container-right-table right"
                          onClick={() => setIos(!ios)}
                        >
                          <th scope="row">Ios</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {ios ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {ios ? (
                          <>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">우현진</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3기</th>
                              <th scope="row">노민희</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4기</th>
                              <th scope="row">강민석</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                        <tr
                          className="ServiceNotice-infoContent-container-right-table right"
                          onClick={() => setWeb(!web)}
                        >
                          <th scope="row">Web</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {web ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {web ? (
                          <>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">서진혁</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">민경빈</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3기</th>
                              <th scope="row">
                                <div className="trc-name">추명호</div>{' '}
                                <div className="trc-icon">
                                  <FaCrown />
                                </div>
                              </th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3기</th>
                              <th scope="row">권선국</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3.5기</th>
                              <th scope="row">최석준</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3.5기</th>
                              <th scope="row">류재정</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3.5기</th>
                              <th scope="row">김원빈</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4기</th>
                              <th scope="row">권순관</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4기</th>
                              <th scope="row">김혜선</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4기</th>
                              <th scope="row">오하형</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4기</th>
                              <th scope="row">권용빈</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                        <tr
                          className="ServiceNotice-infoContent-container-right-table right"
                          onClick={() => setDesign(!design)}
                        >
                          <th scope="row">Design</th>
                          <th scope="row"></th>
                          <th scope="row" className="right">
                            {design ? (
                              <MdKeyboardArrowUp className="right-icon" />
                            ) : (
                              <MdKeyboardArrowDown className="right-icon" />
                            )}
                          </th>
                        </tr>
                        {design ? (
                          <>
                            <tr>
                              <th scope="row">1기</th>
                              <th scope="row">오동헌</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">2기</th>
                              <th scope="row">나해인</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">3기</th>
                              <th scope="row">황유신</th>
                              <th scope="row">
                                <GoOctoface />
                              </th>
                            </tr>
                            <tr>
                              <th scope="row">4기</th>
                              <th scope="row">곽준환</th>
                              <th scope="row">
                                <GoOctoface />
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

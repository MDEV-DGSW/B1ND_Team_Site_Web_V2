import React from 'react';
import ServiceNoticeTemplate from 'components/ServiceNoticeTemplate';

const WebStNotice = () => {
  const Data = {
    title: '도담도담 학생용 웹 릴리즈 노트',
    content: <>
    <b style={{fontSize: "20px"}}>Ver 1.0.0</b><br/>
    <p style={{fontSize: "13px"}}>Release Date : 2020.05.18</p>
    <hr/>
    [주요 업데이트 내용]<br/>
    서비스 권한<br/>
    &nbsp;- 가입승인<br/>
    &nbsp;- 권한 부여 박스가 사라지는 버그를 수정하였습니다.<br/>
    &nbsp;- 스크롤이 잘리는 현상을 수정하였습니다<br/>
    학생 점수 관리<br/>
    &nbsp;- 학생 점수 관리의 학생리스트가 가끔씩 새로고침시 사라지는 버그를 수정하였습니다. <br/>
    상 / 벌점 관리<br/>
    &nbsp;- 상벌점 발급/삭제시에도 로딩을 추가하였습니다.<br/>
    </>
  }

  return (
    <>
      <ServiceNoticeTemplate
        title={Data.title}
        content={Data.content}
      /> 
    </>
  );
};

export default WebStNotice;
import React from 'react';
import ServiceNoticeTemplate from 'components/ServiceNoticeTemplate';

const BindSiteNotice = () => {
  const Data = {
    title: '도담도담 팀사이트 릴리즈 노트',
    content: <>
    <b style={{fontSize: "20px"}}>Ver 1.0.0</b><br/>
    <p style={{fontSize: "13px"}}>Release Date : 2020.05.18</p>
    <hr/>
    [주요 업데이트 내용]<br/>
    메인<br/>
    &nbsp;- 도담도담 정보란 하이라이트가 일정 모니터에서 높이가 다른 오류를 수정<br/>
    소개<br/>
    &nbsp;- 맴버 리스트 옆 아이콘 호버효과 제거<br/>
    &nbsp;- 멤버 리스트 깃허브, 블로그 잘못된 링크 수정 및 제거<br/>
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

export default BindSiteNotice;
import React from 'react';
import ServiceNoticeTemplate from 'components/ServiceNoticeTemplate';

const WebStNotice = () => {
  const Data = {
    title: '도담도담 학생용 웹 릴리즈 노트',
    // content: <>
    // <b style={{fontSize: "20px"}}>Ver 1.0.0</b><br/>
    // <p style={{fontSize: "13px"}}>Release Date : 2020.05.18</p>
    // <hr/>
    // 피드백 반영, 서비스 품질 개선, 기타 오류 개선<br/><br/>
    // [주요 업데이트 내용]<br/>
    // 일정<br/>
    // &nbsp;- 비즈니스 로직 수정<br/>
    // &nbsp;- 일정 리프레쉬 토큰 작업<br/>
    // &nbsp;- 간혹 일정이 안보이는 버그 수정<br/>
    // 기상송<br/>
    // &nbsp;- 기상송 관련 이슈 정리 (스프린트 참고)<br/>
    // 분실물<br/>
    // &nbsp;- 분실물 무한스크롤<br/>
    // &nbsp;- 분실물 댓글 프로필 사진 border 추가<br/>
    // 내 정보<br/>
    // &nbsp;- 비밀번호 변경 시, 비밀번호 확인 추가<br/>
    // 기타<br/>
    // &nbsp;- 피드백 버튼 추가<br/>
    // &nbsp;- html lang 속성 수정 및 구글 번역 방지<br/>
    // </>
    content: <>
    예시 입니다.
    1) 예시.
    2) 예시.
    3) 예시.
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
import React from 'react';
import ServiceNoticeTemplate from 'components/ServiceNoticeTemplate';

const WindowNotice = () => {
  const Data = {
    title: '도담도담 윈도우 어드민 릴리즈 노트',
    // content: <>
    // <b style={{fontSize: "20px"}}>Ver 1.0.0</b><br/>
    // <p style={{fontSize: "13px"}}>Release Date : 2020.05.18</p>
    // <hr/>
    // [주요 업데이트 내용]<br/>
    // 자습실<br/>
    // &nbsp;- 특정 학생 자습실 위치 변경사항 없이 저장을 눌렀을 경우 튕기는 오류 수정<br/>
    // &nbsp;- 특정 학생 자습실 위치 변경 없이 저장시에 "중복된 시간표" 메시지가 뜨지 않던 오류 수정<br/>
    // &nbsp;- 선생님 계정 로그인 후 자습실 최초 변경 후 다른 학생 자습실 변경시에 저장이 불가능하던 오류 수정<br/>
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

export default WindowNotice;
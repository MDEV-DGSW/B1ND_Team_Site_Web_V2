import React from 'react';
import ServiceNoticeTemplate from 'components/ServiceNoticeTemplate';

const WindowNotice = () => {
  const Data = {
    title: '도담도담 윈도우 어드민 릴리즈 노트',
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
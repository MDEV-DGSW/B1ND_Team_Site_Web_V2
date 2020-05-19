import React from 'react';
import ServiceNoticeTemplate from 'components/ServiceNoticeTemplate';

const WindowNotice = () => {
  const anData = {
    title: '제목',
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
        title={anData.title}
        content={anData.content}
      /> 
    </>
  );
};

export default WindowNotice;
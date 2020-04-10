import React from 'react';
import Member from 'components/Member/Member';
import MainTemplate from 'components/MainTemplate/MainTemplate';

const MemberPage = () => {
    return (
        <MainTemplate pageType={'member'}> 
          <Member/>
        </MainTemplate>
    );
}

export default MemberPage;
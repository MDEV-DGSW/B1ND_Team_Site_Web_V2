import React from 'react';
import ServiceNotice from 'components/ServiceNotice/ServiceNotice';
import MainTemplate from 'components/MainTemplate/MainTemplate';

const ServiceNoticePage = () => {
    return (
        <MainTemplate pageType={'service'}>
          <ServiceNotice/>
        </MainTemplate>
    );
}

export default ServiceNoticePage;
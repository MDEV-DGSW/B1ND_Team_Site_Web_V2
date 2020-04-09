import React, { useState, useCallback, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import InquiryList from 'components/Inquiry/InquiryList';

const InquiryListContainer = ({ store }) => {
  const { handleInquiryList, pageCount } = store.InquiryStore;
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [inquiryList, setInquiryList] = useState([]);

  const requestInquiryList = useCallback(async () => {
    await handleInquiryList(1)
      .then (response => {
        if (response.status === 200) {
          setInquiryList(response.data.inquirys);
        }
        setIsLoading(false);
      })

      .catch (error => {
        console.log(error);
        setIsLoading(false);
        return error;
      })
  }, [handleInquiryList]);

  const pageCountUp = () => {
    requestInquiryList();
    setPage(page + 1);
  }

  const pageCountDown = () => {
    setPage(page - 1);
    requestInquiryList();
  }

  useEffect(() => {
    requestInquiryList();
  }, []);

  return (
    <>
      {
        isLoading ? <div>Loading...</div> : <InquiryList inquiryList ={inquiryList} requestInquiryList ={requestInquiryList} 
        page ={page} setPage ={setPage} pageCountUp ={pageCountUp} pageCountDown ={pageCountDown} />
      }
    </>
  );
}

export default inject('store')(observer(InquiryListContainer));
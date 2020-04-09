import React, {useCallback, useEffect, useState} from 'react';
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import Loading from 'components/Loading';
import InquiryList from 'components/Admin/InquiryList';

const InquiryListContainer = ({store}) => {
  const [inquiryList, setInquiryList] = useState([]);
  const [maxPg, setMaxPg] = useState(1);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const {handleInquiryList} = store.InquiryStore;

  const requestInquiryList = useCallback(async()=>{
    await handleInquiryList(page)
    .then(response=>{
      if(response.status===200){
        setMaxPg(response.data.page_count);
        setInquiryList(response.data.inquirys);
      }
      setIsLoading(false);
    })
    .catch(error=>{
      console.log(error);
      setIsLoading(false);
    })
  }, [handleInquiryList]);

  const pageCountUp = () => {
    requestInquiryList();
    if(page<maxPg){
      setPage(page+1);
    }
  }

  const pageCountDown = () => {
    requestInquiryList();
    if(page>1){
      setPage(page-1);
    }
  }

  useEffect(()=>{
    requestInquiryList();
  }, []);

  return (
    <>
    {
      isLoading ? <Loading/> : <InquiryList inquiryList ={inquiryList} requestInquiryList ={requestInquiryList} 
      page ={page} setPage ={setPage} pageCountUp ={pageCountUp} pageCountDown ={pageCountDown}/>
    }
    </>
  );
};

export default inject("store")(observer(withRouter(InquiryListContainer)));

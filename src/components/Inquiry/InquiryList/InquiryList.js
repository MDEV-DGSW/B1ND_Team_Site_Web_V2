import React from 'react';
import { inject, observer } from 'mobx-react';
import './InquiryList.scss';

const InquiryList = ({ store, history, inquiryList, requestInquiryList, page, setPage, pageCountDown, pageCountUp }) => {
  // const { pageCount, maxLength, handleCountUp, handleCountDown } = store.InquiryStore;

  // const inquiryLists = inquiryList.map(inquiry => {
  //   const { idx, title, create_date } = inquiry;
  //   return (
  //     <div className ="InquiryList-ListBox-Contents-List" key ={idx}>
  //         Q. <span className ="InquiryList-ListBox-Contents-List-Item">{title}
  //       </span>
  //     </div>
  //   );
  // })

  return (
    <div className ="InquiryList">
      <div className ="InquiryList-Contents">
      <div className ="InquiryList-TitleBox">
        <div className ="InquiryList-TitleBox-Contents">
          <div className ="InquiryList-TitleBox-Title">
            문의사항
            <button className ="InquiryList-TitleBox-WriteButton">문의 작성</button>
          </div>
          <div className ="InquiryList-TitleBox-SubTitle">
            ※ 계열사 지원문의는 각 회사의 채용 홈페이지에서 보다 빠르고 정확한 답변이 가능합니다.
            </div>
          <hr className ="InquiryList-TitleBox-Line" />
          <div className ="InquiryList-TitleBox-SearchZone">
            <input type ="text" className ="InquiryList-TitleBox-Search" placeholder ="Search Keywords" />
          </div>
        </div>
        
      </div>

      <div className ="InquiryList-ListBox">
        <div className ="InquiryList-ListBox-Contents">

        <div className ="InquiryList-ListBox-Contents-List">
          Q. <span className ="InquiryList-ListBox-Contents-List-Item">
            바인드팀은 왜 바인드인가요?
          </span>

          <div className ="InquiryList-ListBox-Answer">
            Lorem
          </div>
        </div>

          <div className ="InquiryList-ListBox-Contents-List">
          Q. <span className ="InquiryList-ListBox-Contents-List-Item">
            바인드팀은 무슨 활동을 하나요?
          </span>
          <div className ="InquiryList-ListBox-Answer">
            Lorem
          </div>
        </div>

        <div className ="InquiryList-ListBox-Contents-List">
          Q. <span className ="InquiryList-ListBox-Contents-List-Item">
            바인드팀은 언제 창설되었나요?
          </span>
          <div className ="InquiryList-ListBox-Answer">
            Lorem
          </div>
        </div>

        <div className ="InquiryList-ListBox-Contents-List">
          Q. <span className ="InquiryList-ListBox-Contents-List-Item">
            어떻게 하면 바인드팀에 들어갈 수 있나요?
          </span>
          <div className ="InquiryList-ListBox-Answer">
            Lorem
          </div>
        </div>

        <div className ="InquiryList-ListBox-Contents-List">
          Q. <span className ="InquiryList-ListBox-Contents-List-Item">
            연차는 어떻게 쓸 수 있나요?
          </span>
          <div className ="InquiryList-ListBox-Answer">
            Lorem
          </div>
        </div>

        <div className ="InquiryList-ListBox-Contents-List">
          Q. <span className ="InquiryList-ListBox-Contents-List-Item">
            바인드팀은 언제 활동하나요?
          </span>
          <div className ="InquiryList-ListBox-Answer">
            Lorem
          </div>
        </div>

        </div>

        <hr className ="InquiryList-ListBox-Line" />
      </div>
      </div>
    </div>
  );
}

export default inject('store')(observer(InquiryList));
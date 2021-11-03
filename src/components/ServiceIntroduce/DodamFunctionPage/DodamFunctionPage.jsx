import React from "react";
import "./DodamFunctionPage.scss";
import { useInView } from "react-intersection-observer";
import DodamMobileOffBase from "assets/images/mockup/DodamMobileOffBase.png";
import DodamWEBOffBase from "assets/images/mockup/DodamWEBOffBase.png";
import DodamMobilePosition from "assets/images/mockup/DodamMobilePosition.png";
import DodamWEBPosition from "assets/images/mockup/DodamWEBPosition.png";
import DodamWEBWakeUp from "assets/images/mockup/DodamWEBWakeUp.png";
import DodamMobileWakeUp from "assets/images/mockup/DodamMobileWakeUp.png";
import DodamWEBLost from "assets/images/mockup/DodamWEBLost.png";
import DodamMobileLost from "assets/images/mockup/DodamMobileLost.png";

const DodamFunctionPage = ({ number }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 100,
    initialInView: true,
  });
  const contentArray = [
    {
      number: " 0 1 ",
      intro: "일과 후 시간에 위치 확인을 위한",
      title: "학생 위치 신청",
      content1: "도담도담이 있기 전, 우리 학교에서는",
      content2: "일과가 끝나면 모든학생이 교무실에서 종이 당직 장부를 작성했습니다.",
      content3: "잃어버리고, 찢어지고, 지워지던 종이 당직 장부 대신",
      content4: "이제는 클릭 몇번으로 간편하게 위치 신청하세요!",
      image1: DodamWEBPosition,
      image2: DodamMobilePosition,
    },
    {
      number: " 0 2 ",
      intro: "간편하게 신청하고 복귀하기 위한",
      title: "외출 / 외박 신청",
      content1: "도담도담이 있기 전, 우리 학교에서는",
      content2: "외출 / 외박을 신청하고 복귀할 때 직접 선생님에게 찾아가 확인받았습니다.",
      content3: "번거롭게 선생님을 찾으러 가는 대신",
      content4: "편하고 간단하게 신청하세요!",
      image1: DodamWEBOffBase,
      image2: DodamMobileOffBase,
    },
    {
      number: " 0 3 ",
      intro: "즐거운 아침을 더 즐겁게",
      title: "아침 기상송 신청",
      content1: "도담도담이 있기 전, 우리 학교에서는",
      content2: "방송부원이 직접 기상송을 신청하고 승인했습니다.",
      content3: "소수의 학생들이 기상송을 담당하는 대신",
      content4: "모든 학생들이 신청한 다양한 곡을 아침마다 들어보세요!",
      image1: DodamWEBWakeUp,
      image2: DodamMobileWakeUp,
    },
    {
      number: " 0 4 ",
      intro: "소중한 물건을 빠르고 쉽게 찾을 수 있다면?",
      title: "분실물, 습득물",
      content1: "도담도담이 있기 전, 우리 학교에서는",
      content2: "SNS를 이용하거나 직접 발로 뛰며 분실물을 공유 했습니다.",
      content3: "도담도담의 분실물, 습득물 게시판을 통해",
      content4: "빠르고 쉽게 잃어버린 물건을 찾아가세요!",
      image1: DodamWEBLost,
      image2: DodamMobileLost,
    },
  ];
  return (
    <>
      {inView && (
        <div className="DodamFunctionPage">
          <div className="DodamFunctionPage-Number">{contentArray[number].number}</div>
          <div className="DodamFunctionPage-ContentWrap">
            <div className="DodamFunctionPage-ContentWrap-Title">
              <div className="DodamFunctionPage-ContentWrap-Title-Intro">
                {contentArray[number].intro}
              </div>
              <div className="DodamFunctionPage-ContentWrap-Title-Main">
                {contentArray[number].title}
              </div>
            </div>
            <div className="DodamFunctionPage-ContentWrap-Content">
              <div>{contentArray[number].content1}</div>
              <div>{contentArray[number].content2}</div>
              <div>{contentArray[number].content3}</div>
              <div>{contentArray[number].content4}</div>
            </div>
            {number === 3 ? (
              <div className="DodamFunctionPage-ContentWrap-Number">
                <img src={contentArray[number].image1} alt={contentArray[number].image1} />
                <img src={contentArray[number].image2} alt={contentArray[number].image2} />
              </div>
            ) : (
              <div className="DodamFunctionPage-ContentWrap-ImageWrap">
                <img src={contentArray[number].image1} alt={contentArray[number].image1} />
                <img src={contentArray[number].image2} alt={contentArray[number].image2} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DodamFunctionPage;

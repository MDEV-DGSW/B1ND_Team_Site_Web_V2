import React from "react";
import "./MineService.scss";
const MineService = () => {
    return (
        <div className="MineServiceDiv">
            <div className="MineServiceDiv_imgContainer">
                {/* img here! */}
                {/* <img
                    src="https://avatars2.githubusercontent.com/u/48292190?s=460&u=860f4f150c09d02d73753b6a60020c674b4b2059&v=4"
                    alt="mine"
                /> */}
                <h1>MINE</h1>
            </div>
            <div className="MineServiceDiv_sloganContainer">
                <div className="MineServiceDiv_sloganContainer_slogans">
                    <div className="MineServiceDiv_sloganContainer_slogans_slogan">
                        나의 하루를
                    </div>
                    <div className="MineServiceDiv_sloganContainer_slogans_slogan">
                        더 자세하게,
                    </div>
                    <div className="MineServiceDiv_sloganContainer_slogans_slogan">
                        더 정확하게
                    </div>
                    <div className="MineServiceDiv_sloganContainer_slogans_slogan">
                        마인
                    </div>
                </div>
                <div className="MineServiceDiv_sloganContainer_sloganBar MineServiceDiv_sloganContainer_sloganBar_top"></div>
                <div className="MineServiceDiv_sloganContainer_sloganBar"></div>
                <div className="MineServiceDiv_sloganContainer_sloganBar"></div>
                <div className="MineServiceDiv_sloganContainer_sloganBar"></div>
                <div className="MineServiceDiv_explanations">
                    <p className="MineServiceDiv_explanations_explanation">
                        학생들의 곁에는 항상 도담도담 어쩌고 저쩌고어ㅉ
                    </p>
                    <p className="MineServiceDiv_explanations_explanation">
                        서비스에 대한 어쩌고 저쩌고어ㅉ 간단한 소개와 텍스트들과
                        내용들 학생들의 곁에는 항상 어쩌고 저쩌고어ㅉ
                    </p>
                    <p className="MineServiceDiv_explanations_explanation">
                        내용들 대한 어쩌고 저쩌고어ㅉ 간단한 소개와 텍스트들과
                        내용들
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MineService;

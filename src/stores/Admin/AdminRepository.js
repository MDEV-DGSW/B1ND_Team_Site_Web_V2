import { SERVER } from "config/server.json";
import axios from "axios";

class AdminRepository {
  async handleAdminLogin(request) {
    //관리자 로그인
    try {
      const { data } = await axios.post(`${SERVER}/v1/admin/login`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }

  // 문의 리스트 조회
  handleInquiryList = async (page) => {
    try {
      const { data } = await axios.get(`${SERVER}/v1/inquiry?page=${page}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  // 문의 검색
  handleInquirySearch = async (query) => {
    try {
      const { data } = await axios.get(`${SERVER}/v1/inquiry?query=${query}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  // 문의 조회
  handleInquiryPage = async (idx) => {
    try {
      const { data } = await axios.get(`${SERVER}/v1/inquiry/${idx}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  //답변 조회
  handleAnswerLookup = async (inquiry) => {
    try {
      const { data } = await axios.get(`${SERVER}/v1/answer?inquiry=${inquiry}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  //문의 답변 생성
  handleInquiryInsert = async (request) => {
    console.log(request);
    try {
      const { data } = await axios.post(`${SERVER}/v1/answer`, request, {
        headers: {
          "x-access-token": sessionStorage.getItem("Token")
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  // 문의 답변 수정
  handleAnswerRevise = async (idx, content) => {
    try {
      const { data } = await axios.put(`${SERVER}/v1/answer/${idx}`, content, {
        headers: {
          "x-access-token": sessionStorage.getItem('Token')
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  // 문의 삭제
  handleInquiryDelete= async (idx) => {
    try {
      const { data } = await axios.delete(`${SERVER}/v1/inquiry/${idx}`, {
        headers: {
          "x-access-token": sessionStorage.getItem("Token")
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  // 답변 삭제
  handleAnswerDelete = async (idx) => {
    try {
      const { data } = await axios.delete(`${SERVER}/v1/answer/${idx}`, {
        headers: {
          "x-access-token": sessionStorage.getItem("Token")
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

}

export default new AdminRepository();

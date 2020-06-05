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

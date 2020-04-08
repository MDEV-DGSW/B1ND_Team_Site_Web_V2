import { SERVER } from "config/server.json";
import axios from "axios";

class InquiryRepository { 
  // 문의 리스트 조회
  async handleList(page) {
    try {
      const { data } = await axios.get(`${SERVER}/v1/inquiry?page=${page}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  // 문의 검색
  async handleSearch(query) {
    try {
      const { data } = await axios.get(`${SERVER}/v1/inquiry?query=${query}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  // 문의 조회
  async handlePage(idx) {
    try {
      const { data } = await axios.get(`${SERVER}/v1/inquiry/${idx}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  //답변 조회
  async handleAnswer(inquiry) {
    // console.log(inquiry);
    try {
      const { data } = await axios.get(
        `${SERVER}/v1/answer?inquiry=${inquiry}`
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  // 문의 생성
  async handleInsert(request) {
    console.log(request);
    try {
      const { data } = await axios.post(`${SERVER}/v1/inquiry`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }

  //문의 답변 생성
  async handleAnswerInsert(request) {
    console.log(request);
    try {
      const { data } = await axios.post(`${SERVER}/v1/answer`, request, {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token")
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  // 문의 삭제
  async handleDelete(idx) {
    try {
      const { data } = await axios.delete(`${SERVER}/v1/inquiry/${idx}`, {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token")
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  // 답변 삭제
  async handleAnswerDelete(idx) {
    try {
      const { data } = await axios.delete(`${SERVER}/v1/answer/${idx}`, {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token")
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new InquiryRepository();

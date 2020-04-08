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

  async handleAllow(request) {
    //회원가입 승인
    console.log(request);
    try {
      const { data } = await axios.post(
        `${SERVER}/v1/admin/allow`,
        { id: request },
        {
          headers: {
            "x-access-token": localStorage.getItem("x-access-token")
          }
        }
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleDeny(request) {
    //회원가입 거절
    console.log(request);
    try {
      const { data } = await axios.post(
        `${SERVER}/v1/admin/deny`,
        { id: request },
        {
          headers: {
            "x-access-token": localStorage.getItem("x-access-token")
          }
        }
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleKickOut(request) {
    //회원 강제 탈퇴
    console.log(request);
    try {
      const { data } = await axios.post(
        `${SERVER}/v1/admin/drop`,
        { id: request },
        {
          headers: {
            "x-access-token": localStorage.getItem("x-access-token")
          }
        }
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleLookUp(request) {
    //회원 전체 조회
    console.log(request);
    try {
      const { data } = await axios.get(`${SERVER}/v1/admin`, {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token")
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleLookUpWaiting() {
    //승인 대기 회원 조회
    try {
      const { data } = await axios.get(`${SERVER}/v1/admin/await`, {
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

export default new AdminRepository();

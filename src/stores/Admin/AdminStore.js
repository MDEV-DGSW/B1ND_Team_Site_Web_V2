import { observable, action } from "mobx";
import { autobind } from "core-decorators";

import AdminRepository from "./AdminRepository";

@autobind
class AdminStore {
  @observable isLoading = false;
  @observable userList = [];
  @action
  handleAdminLogin(data) {
    try {
      const response = AdminRepository.handleAdminLogin(data);
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.log(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  async handleList(page) {
    //문의 리스트 조회
    try {
      this.isLoading = true;
      const response = await AdminRepository.handleList(page);
      this.inquiryList = response.data.inquirys;
      this.isLoading = false;
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  @action
  handleSearch(data) {
    //문의 검색
    try {
      const response = AdminRepository.handleSearch(data);
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
  @action
  async handlePage(idx) {
    //문의 조회
    try {
      this.isLoading = true;
      const response = await AdminRepository.handlePage(idx);
      this.inquiryList = response.data.inquiry;
      this.isLoading = false;
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
  //답변 조회
  @action
  handleAnswer(data) {
    try {
      const response = AdminRepository.handleAnswer(data);
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  @action
  handleAnswerInsert(data) {
    //문의 답변 생성
    try {
      const response = AdminRepository.handleAnswerInsert(data);
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  @action
  handleDelete(data) {
    //문의 삭제
    try {
      const response = AdminRepository.handleDelete(data);
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  @action
  handleAnswerDelete(data) {
    //답변 삭제
    try {
      const response = AdminRepository.handleAnswerDelete(data);
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.log(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
}

export default AdminStore;

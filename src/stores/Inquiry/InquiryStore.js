import { observable, action } from "mobx";
import { autobind } from "core-decorators";

import InquiryRepository from "./InquiryRepository";

@autobind
class InquiryStore {
  @observable isLoading = false;
  @observable inquiryList = [];
  @action
  async handleList(page) {
    //문의 리스트 조회
    try {
      this.isLoading = true;
      const response = await InquiryRepository.handleList(page);
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
      const response = InquiryRepository.handleSearch(data);
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
      const response = await InquiryRepository.handlePage(idx);
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
      const response = InquiryRepository.handleAnswer(data);
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
  handleInsert(data) {
    //문의 생성
    try {
      const response = InquiryRepository.handleInsert(data);
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
      const response = InquiryRepository.handleAnswerInsert(data);
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
      const response = InquiryRepository.handleDelete(data);
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
      const response = InquiryRepository.handleAnswerDelete(data);
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

export default InquiryStore;

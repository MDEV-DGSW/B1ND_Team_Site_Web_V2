import { observable, action } from "mobx";
import { autobind } from "core-decorators";
import InquiryRepository from "./InquiryRepository";

@autobind
class InquiryStore {

  @action
  handleInquiryList = async (page) => {
    // 문의 리스트 조회
    try {
      const response = await InquiryRepository.handleInquiryList(page);
      return new Promise((resolve, reject) => {
        resolve(response);
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
  }

  @action
  handleInquirySearch = async (query) => {
    // 문의 검색
    try {
      const response = await InquiryRepository.handleInquiryInsert(query);
      return new Promise((resolve, reject) => {
        resolve(response);
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
  }

  @action
  handleInquiryPage = async (idx) => {
    // 문의 페이지 조회
    try {
      const response = await InquiryRepository.handleInquiryPage(idx);
      return new Promise((resolve, reject) => {
        resolve(response);
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
  }

  @action
  handleInquiryInsert = async (requestData) => {
    // 문의 생성
    try {
      const response = await InquiryRepository.handleInquiryInsert(requestData);
      return new Promise((resolve, reject) => {
        resolve(response);
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
  }

  @action
  handleInquiryDelete = async (idx) => {
    // 문의 삭제
    try {
      const response = await InquiryRepository.handleInquiryDelete(idx);
      return new Promise((resolve, reject) => {
        resolve(response);
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
  }

  @action
  handleAnswerInsert = async (requestData) => {
    // 답변 작성
    try {
      const response = await InquiryRepository.handleAnswerInsert(requestData);
      return new Promise((resolve, reject) => {
        resolve(response);
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
  }

  @action
  handleAnswerLookup = async (idx) => {
    // 답변 조회
    try {
      const response = await InquiryRepository.handleAnswerLookup(idx);
      return new Promise((resolve, reject) => {
        resolve(response);
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
  }

  @action
  handleAnswerRevise = async (idx, content) => {
    // 답변 수정
    try {
      const response = await InquiryRepository.handleAnswerRevise(idx, content);
      return new Promise((resolve, reject) => {
        resolve(response);
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
  }

  @action
  // 답변 삭제
  handleAnswerDelete = async (idx) => {
    try {
      const response = await InquiryRepository.handleAnswerDelete(idx);
      return new Promise((resolve, reject) => {
        resolve(response);
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      })
    }
  }
}

export default InquiryStore;
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

  @action
  handleAllow(data) {
    try {
      const response = AdminRepository.handleAllow(data);
      console.log(AdminRepository.handleAllow(data));
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

  @action
  handleDeny(data) {
    try {
      const response = AdminRepository.handleDeny(data);
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

  @action
  handleKickOut(data) {
    try {
      const response = AdminRepository.handleKickOut(data);
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
  @action
  async handleLookUp() {
    try {
      this.isLoading = true;
      const response = await AdminRepository.handleLookUp();
      this.userList = response.data.members;
      this.isLoading = false;
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

  @action
  async handleLookUpWaiting() {
    try {
      this.isLoading = true;
      const response = await AdminRepository.handleLookUpWaiting();
      this.userList = response.data.members;
      this.isLoading = false;
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

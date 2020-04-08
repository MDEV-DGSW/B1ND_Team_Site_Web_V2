import { observable, action } from "mobx";
import { autobind } from "core-decorators";

import SignRepository from "./SignRepository";

@autobind
class SignStore {
  @action
  handleLogin(data) {
    try {
      const response = SignRepository.handleLogin(data);
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
  handleSignUp(data) {
    try {
      const response = SignRepository.handleSignUp(data);
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
}

export default SignStore;

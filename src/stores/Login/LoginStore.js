import { observable, action } from "mobx";
import { autobind } from "core-decorators";
import LoginRepository from './LoginRepository';

@autobind
class LoginStore{
  @action
  handleRegister(data){
    try{
      const response = LoginRepository.handleRegister(data);
      return new Promise((resolve, reject)=>{
        resolve(response);
      });
    } catch(error){
      console.error(error);
      return new Promise((resolve, reject)=>{
        reject(error);
      });
    }
  }

  @action
  handleLogin(data) {
    try{
      const response = LoginRepository.handleLogin(data);
      return new Promise((resolve, reject)=>{
        resolve(response);
      });
    } catch(error){
      console.error(error);
      return new Promise((resolve, reject)=>{
        reject(error);
      });
    }
  }
}

export default LoginStore;
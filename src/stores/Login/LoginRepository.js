import {SERVER} from 'config/server.json';
import axios from 'axios';

class LoginRepository {
  handleLogin = async()=>{
    //회원가입
    try{
      const {data} = await axios.post(`${SERVER}/register`, request);
      return data;
    } catch(error){
      throw error;
    }
  }

  handleLogin = async()=>{
    //로그인
    try{
      const {data} = await axios.post(`${SERVER}/login`, request);
      return data;
    } catch(error){
      throw error;
    }
  }
}

export default new LoginRepository();
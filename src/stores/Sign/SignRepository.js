import { SERVER } from "config/server.json";
import axios from "axios";

class SignRepository {
  async handleLogin(request) {
    try {
      const { data } = await axios.post(`${SERVER}/v1/auth/login`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleSignUp(request) {
    try {
      const { data } = await axios.post(`${SERVER}/v1/auth/register`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new SignRepository();

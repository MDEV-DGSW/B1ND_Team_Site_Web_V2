import { SERVER } from "config/server.json";
import axios from "axios";

class ProfileRepository {
  async handleProfile() {
    try {
      const { data } = await axios.get(`${SERVER}/v1/member`, {
        headers: {
          "x-access-token": localStorage.getItem("x-access-token")
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleFixProfile(request) {
    console.log(request);
    console.log('helloworld');
    try {
      const { data } = await axios.put(`${SERVER}/v1/member`, request, {
        headers: {
          "x-access-token": localStorage.getItem('x-access-token')
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ProfileRepository();
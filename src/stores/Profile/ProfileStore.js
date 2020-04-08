import { action, observable } from "mobx";
import { autobind } from 'core-decorators';
import ProfileRepository from './ProfileRepository';

@autobind
class ProfileStore {
  @observable profileInfo = {};
  @observable isMyInfo = true; 
  @action
  async handleProfile() {
    try {
      const response = await ProfileRepository.handleProfile();
      this.profileInfo = response.data.member;
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  @action 
  async handleFixProfile(request) {
    try {
      const response = await ProfileRepository.handleFixProfile(request);
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  @action handleIsMyInfo () {
    this.isMyInfo = !this.isMyInfo;
  } 
}

export default ProfileStore;
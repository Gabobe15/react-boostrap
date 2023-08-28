import axios from 'axios'

export class UserSerVice {
  static serverUrl = `https://jsonplaceholder.typicode.com/users`;
  static getAllUsers() {
    return axios.get(this.serverUrl);
  }
}

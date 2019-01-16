import axios from "axios";

export interface Iuser {
  email: string;
  password: string;
  hccode: string;
}

export default class userService {
  private _token: string = "";
  private _user: Iuser = {
    email: "",
    password: "",
    hccode: ""
  }

  async login(user: Iuser): Promise<string> {
    const url = "http://localhost:3000/auth/login"
    try {
      const reponse = await axios.post(url, user);
      this._token = reponse.data.access;
    } catch (err) {
      throw err;
    }
    return this._token;
  }

  async isValidate(token: string) {
    const url = "http://localhost:3000/auth/validate"
    let bool = false;
    try {
      const reponse = await axios.post(url, { token: this._token});
      bool = (reponse.data.length ? true : false);
    } catch (err) {
      throw err;
    }
    return bool;
  }

  async getUser(email: string) {
     const url = "http://localhost:3000/auth/validate"
    try {
      const reponse = await axios.post(url, { email: this.user.email});
      if (reponse.data.length) {
        this._user = reponse.data
      }
    } catch (err) {
      throw err;
    }
    return this._user;
  }

  get user(){
    return this._user;
  }

  get token() {
    return this._token;
  }
}
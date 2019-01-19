import { router } from './../router/router';
import { TOKEN_STORAGE } from './../constants';
import axios from "axios";

export interface Iuser {
  email: string;
  password: string;
  hccode: string;
  dateOfBirth: string;
}

export default class userService {
  private _token: string = "";
  private _user: Iuser = {
    email: "",
    password: "",
    hccode: "",
    dateOfBirth: "",
  }
  private _isLogin = false;

  constructor() {
    this.init();
  }

  async init() {
    if (typeof (Storage) !== "undefined") {
      const token = localStorage.getItem(TOKEN_STORAGE);
      if (token && token != "") {
         this.isValidate(token as string).then((valid) => {
           this._isLogin = valid;
        });
      }
    }
  }

  async login(user: Iuser): Promise<string> {
    const url = "http://localhost:3000/auth/login"
    try {
      const reponse = await axios.post(url, user);
      if (reponse.data.accessToken) {
        this._token = reponse.data.accessToken;
        this._user = user;
        this._isLogin = true;
        if (typeof (Storage) !== "undefined") {
          localStorage.setItem(TOKEN_STORAGE, this._token);
        }
      } else {
        throw new Error(reponse.data.message || reponse.data);
      }
    } catch (err) {
      throw err;
    }
    return this._token;
  }

  async register(user: Iuser): Promise<string> {
    const url = "http://localhost:3000/auth/register"
    try {
      const reponse = await axios.post(url, user);
      if (reponse.data.accessToken) {
        this._token = reponse.data.accessToken;
        this._user = user;
        this._isLogin = true;
        if (typeof (Storage) !== "undefined") {
          localStorage.setItem(TOKEN_STORAGE, this._token);
        }
      } else {
        throw new Error(reponse.data.message || reponse.data);
      }
    } catch (err) {
      throw err;
    }
    return this._token;
  }

  async isValidate(token: string) {
    const url = "http://localhost:3000/auth/verify"
    let bool = false;
    try {
      const reponse = await axios.get(`${url}?token=${token}`, {
        headers:{
          'Authorization': `Bearer ${token}`,
        }
      });
      bool = (reponse.data.email ? true : false);
      if (bool) {
        this._token = token;
      }
      if (reponse.data.email != this._user.email) {
        this._user = {
          email: reponse.data.email,
          password: "",
          hccode: "",
          dateOfBirth: "",
        }
      }
    } catch (err) {
      throw err;
    }
    return bool;
  }

  async getUser() {
    const url = "http://localhost:3000/auth/user"
    try {
      const reponse = await axios.get(`${url}?token=${this._token}`, {
        headers:{
          'Authorization': `Bearer ${this._token}`,
        }
      });
      if (!reponse.data.message) {
        this._user = reponse.data;
      }
    } catch (err) {
      throw err;
    }
    return this._user;
  }

  async setUser(user: Iuser) {
    const url = "http://localhost:3000/auth/user"
    let bool = false;
    try {
      const reponse = await axios.post(`${url}?token=${this._token}`, user, {
        headers:{
          'Authorization': `Bearer ${this._token}`,
        }
      });
      bool = (reponse.data.message === "user saved" ? true : false);
      if (bool) {
        this._user = user;
      }
    } catch (err) {
      throw err;
    }
    return bool;
  }

  logout(): string {
    this._isLogin = false;
    this._user = {
      email: "",
      password: "",
      hccode: "",
      dateOfBirth: "",
    }
    this._token = "";
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem(TOKEN_STORAGE, "");
    }
    router.push("/login");
    return "logout";
  }

  get token() {
    return this._token;
  }

  get isLogin() {
    return this._isLogin;
  }

  get email() {
    return (this._user.email === "" ? 'No Login' : this._user.email);
  }

  get password() {
    return this._user.password;
  }
  
  get hccode() {
    return this._user.hccode;
  }

  get dateOfBirth() {
    return this._user.dateOfBirth;
  }
}
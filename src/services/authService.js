import jwtDecode from "jwt-decode";
import http from "./httpServices";

const tokenKey = "token";

http.setJwt(getJwt());

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const auth = {
  loginWithJwt,
};

export default auth;

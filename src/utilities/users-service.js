//? Organize functions used to sign-up, log in, log out, etc.

import * as userAPI from "./users-api";

export const signUp = async (userData) => {
  const token = await userAPI.signUp(userData);
  // Persist the "token"
  localStorage.setItem("token", token);
  return getUser();
};

export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem("token");
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]))
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export const login = async (userData) => {
  const token = await userAPI.login(userData);
  // Persist the "token"
  localStorage.setItem("token", token);
  return getUser();
};


export const logOut = () => {
  localStorage.removeItem('token')
}
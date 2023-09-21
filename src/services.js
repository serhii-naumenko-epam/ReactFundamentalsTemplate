import { api } from './constants';

export const createUser = async (data) => {
  return await fetch(`${api}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  }).then(result => {
    return result;
  }).catch(e => {console.log(e)});
};

export const login = async (data) => {
  return await fetch(`${api}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  }).then(result => {
    console.log('result', result)

    localStorage.setItem("token", result.result);
    localStorage.setItem("userName", result.user.name);
    localStorage.setItem("email", result.user.email);
  }).catch(e => {console.log(e)});
};

export const getCourses = async () => {
  // write your code here
};

export const getAuthors = async () => {
  // write your code here
};

export const getCurrentUser = async () => {
  // write your code here
};

export const updateCourse = async () => {
  // write your code here
};

export const logout = async () => {
  // write your code here
};

export const deleteCourse = async () => {
  // write your code here
};

export const createCourse = async () => {
  // write your code here
};

export const createAuthor = async () => {
  // write your code here
};

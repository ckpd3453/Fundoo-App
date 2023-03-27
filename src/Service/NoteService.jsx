import axios from "axios";

const headerConfig = {
  headers: {
    Authorization: `bearer ${localStorage.getItem("auth")}`,
  },
};

const baseUrl = "http://localhost:5000/api/v1/notes";

export const createNote = (data) => {
  var response = axios.post(`${baseUrl}`, data, headerConfig);
  return response;
};

export const getAllNote = () => {
  var response = axios.get(`${baseUrl}`, headerConfig);
  return response;
};

export const archive = (id) => {
  console.log("Token", id);
  var response = axios.put(`${baseUrl}/archive/${id}`, "", headerConfig);
  return response;
};

export const trashed = (id) => {
  console.log("Token", id);
  var response = axios.put(`${baseUrl}/trash/${id}`, "", headerConfig);
  return response;
};

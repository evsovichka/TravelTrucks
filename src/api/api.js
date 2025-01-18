import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchAllCampers = async ({ currentPage, limit }) => {
  const response = await axios.get(`/?limit=${limit}&page=${currentPage}`);
  return response.data;
};

export const fetchCamperByid = async ({ id }) => {
  const response = await axios.get(`/${id}`);
  return response.data;
};

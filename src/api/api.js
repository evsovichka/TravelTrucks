import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchAllCampers = async ({ currentPage, limit, filters }) => {
  const { location, equipment = {}, form } = filters;

  const params = {
    limit,
    page: currentPage,
    ...(location && { location }),
    ...(form && { form }),
    ...Object.fromEntries(
      Object.entries(equipment).filter(([key, value]) => value)
    ),
  };
  const response = await axios.get("/", { params });
  return response.data;
};

export const fetchCamperById = async (id) => {
  const response = await axios.get(`/${id}`);
  return response.data;
};

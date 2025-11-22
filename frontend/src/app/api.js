import axios from "axios";
const BASE_URL = "https://url-shortner-backend-theta.vercel.app";

export const getLists = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/links`);
    return response.data;
  } catch (error) {
    console.error("Error fetching URL lists:", error);
  }
};

export const getList = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/links/${id}`, {
      shortId: id,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching URL lists:", error);
  }
};

export const addUrl = async (id) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/links`, {
      url: id,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding URL:", error);
  }
};

export const deleteUrl = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/links`, {
      data: { url: id },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting URL:", error);
  }
};

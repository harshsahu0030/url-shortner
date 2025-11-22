import axios from "axios";

export const getLists = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/links");
    return response.data;
  } catch (error) {
    console.error("Error fetching URL lists:", error);
  }
};

export const getList = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/links/${id}`, {
      shortId: id,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching URL lists:", error);
  }
};

export const addUrl = async (id) => {
  try {
    const response = await axios.post("http://localhost:5000/api/links", {
      url: id,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding URL:", error);
  }
};

export const deleteUrl = async (id) => {
  try {
    const response = await axios.delete("http://localhost:5000/api/links", {
      data: { url: id },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting URL:", error);
  }
};

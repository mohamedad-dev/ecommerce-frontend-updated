import axios from "../api/axios";

const SCATEGORIES_API = "scategories";

const getAllScategories = () => {
  return axios.get(SCATEGORIES_API);
};
const getScategorie = (scategorieId) => {
  return axios.get(`${SCATEGORIES_API}/${scategorieId}`);
};
const createScategorie = (scategorie) => {
  return axios.post(SCATEGORIES_API, scategorie);
};
const deleteScategorie = (scategorieId) => {
  return axios.delete(`${SCATEGORIES_API}/${scategorieId}`);
};
const updateScategorie = (scategorieId, newScategorie) => {
  return axios.put(`${SCATEGORIES_API}/${scategorieId}`, newScategorie);
};
const fetchScategoriesPagination = (page, pageSize, searchText) => {
  return axios.get(
    `${SCATEGORIES_API}/pagination?page=${page}&pageSize=${pageSize}&filter=${searchText}`
  );
};

export default {
  getAllScategories,
  getScategorie,
  createScategorie,
  deleteScategorie,
  updateScategorie,
  fetchScategoriesPagination,
};

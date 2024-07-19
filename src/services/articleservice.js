import axios from "../api/axios";

const ARTICLES_API = "articles";

const getAllArticles = () => {
  return axios.get(ARTICLES_API);
};
const getArticle = (articleId) => {
  return axios.get(`${ARTICLES_API}/${articleId}`);
};
const createArticle = (article) => {
  return axios.post(ARTICLES_API, article);
};
const deleteArticle = (articleId) => {
  return axios.delete(`${ARTICLES_API}/${articleId}`);
};
const updateArticle = (articleId, newArticle) => {
  return axios.put(`${ARTICLES_API}/${articleId}`, newArticle);
};
const fetchArticlesPagination = (page, pageSize, searchText) => {
  return axios.get(
    `${ARTICLES_API}/pagination?page=${page}&pageSize=${pageSize}&filter=${searchText}`
  );
};

export default {
  getAllArticles,
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle,
  fetchArticlesPagination,
};

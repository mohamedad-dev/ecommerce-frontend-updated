import { useEffect, useState } from "react";

import "./article.css";

import articleService from "../../../services/articleservice";

import Pagination from "./Pagination";
import AfficheArticle from "./AfficheArticle";
import HeaderArticle from "./HeaderArticle";
import AddProduct from "./AddProduct";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

const ProductsList = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);

  const fetchProduct = async (currentPage, limit, searchText) => {
    try {
      const result = await articleService.fetchArticlesPagination(
        currentPage,
        limit,
        searchText
      );

      setArticles(result.data.products);
      setTotalPages(result.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct(currentPage, limit, searchText);
  }, [currentPage, limit, searchText]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleDeleteArticle = (id, ref) => {
    confirmAlert({
      title: "Confirm to delete",
      message: `Are you sure to delete ${ref}?`,
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            articleService
              .deleteArticle(id)
              .then(() => fetchProduct(currentPage, limit, ""))
              .catch((error) => console.log(error)),
        },
        {
          label: "No",
          // onClick: () => alert("Click No"),
        },
      ],
    });
  };

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const modifArticles = (updatedArticle) => {
    setArticles(
      articles.map((a) => (a._id === updatedArticle._id ? updatedArticle : a))
    );
  };

  console.log(articles);
  return (
    <>
      <button className="new" onClick={handleShow}>
        <i className="fa-solid fa-plus-square"></i> Nouveau
      </button>
      {show && (
        <AddProduct
          show={show}
          handleClose={handleClose}
          fetchProduct={fetchProduct}
          limit={limit}
        />
      )}
      <HeaderArticle
        searchText={searchText}
        handleSearchChange={handleSearchChange}
      />
      <AfficheArticle
        articles={articles}
        limit={limit}
        handleLimitChange={handleLimitChange}
        handleDeleteArticle={handleDeleteArticle}
        fetchProduct={fetchProduct}
        modifArticles={modifArticles}
      />
      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
};

export default ProductsList;

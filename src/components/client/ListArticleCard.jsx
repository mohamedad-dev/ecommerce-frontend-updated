import { useEffect, useState } from "react";

import articleservice from "../../services/articleservice";

import Pagination from "../admin/articles/Pagination";
import Card from "./Card";

import "./stylecard.css";
const ListArticleCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState([]);
  const fetchProducts = async (page) => {
    try {
      const res = await articleservice.fetchArticlesPagination(page, 18, "");
      setArticles(res.data.products);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);
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
  console.log(articles);
  return (
    <>
      <div className="card-container">
        {articles.map((art) => (
          <Card
            key={art._id}
            imageart={art.imageart}
            reference={art.reference}
            designation={art.designation}
            prix={art.prix}
          />
        ))}
      </div>
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
export default ListArticleCard;

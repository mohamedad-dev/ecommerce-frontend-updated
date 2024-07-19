import { useState } from "react";
import UpdateProduct from "./UpdateProduct";

const AfficheArticle = ({
  articles,
  limit,
  handleLimitChange,
  handleDeleteArticle,
  fetchProduct,
  modifArticles,
}) => {
  const [clickedId, setClickedId] = useState(null);

  const handleClick = (id) => {
    setClickedId(id);
  };
  const handleClose = () => {
    setClickedId(null);
  };
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Référence</th>
            <th>Désignation</th>
            <th>Marque</th>
            <th>Quanité</th>
            <th>Prix</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((art) => (
            <tr key={art._id}>
              <td>
                <img src={art.imageart} width={80} height={80} />
              </td>
              <td>{art.reference}</td>
              <td>{art.designation}</td>
              <td>{art.marque}</td>
              <td>{art.qtestock}</td>
              <td>{art.prix}</td>
              <td>
                <button className="edit" onClick={() => handleClick(art._id)}>
                  <i className="fa-solid fa-pen-to-square"></i>Update
                </button>
                {clickedId === art._id && (
                  <UpdateProduct
                    art={art}
                    handleClose={handleClose}
                    fetchProduct={fetchProduct}
                    limit={limit}
                    modifArticles={modifArticles}
                  />
                )}
              </td>
              <td>
                <button
                  className="delete"
                  onClick={() => handleDeleteArticle(art._id, art.reference)}
                >
                  <i className="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="8">
              <div className="limit-selector-container">
                <label>
                  Afficher &nbsp;
                  <select value={limit} onChange={handleLimitChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={100}>100</option>
                  </select>
                </label>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AfficheArticle;

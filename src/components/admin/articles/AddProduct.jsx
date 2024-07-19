import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

import scategorieservice from "../../../services/scategorieservice";
import articleservice from "../../../services/articleservice";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// couldynary => programmable media
// dau29thsb
// preset name: ecommerce, images

const AddProduct = ({ show, handleClose, fetchProduct, limit }) => {
  const [article, setArticle] = useState({});
  const [scategories, setScategories] = useState([]);
  const [files, setFiles] = useState([]);

  const loadScategories = async () => {
    try {
      const result = await scategorieservice.getAllScategories();
      setScategories(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadScategories();
  }, []);

  const handleSubmit = async () => {
    await articleservice.createArticle(article);
    await fetchProduct(1, limit, "");
    handleClose();
  };

  const serverOptions = () => {
    console.log("server pond");
    return {
      process: (fieldName, file, metadata, load, error, progress, abort) => {
        console.log(file);
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "ecommerce");
        data.append("cloud_name", "dau29thsb");
        data.append("public_id", file.name);
        axios
          .post("https://api.cloudinary.com/v1_1/dau29thsb/image/upload", data)
          .then((response) => response.data)
          .then((data) => {
            console.log(data);
            setArticle({ ...article, imageart: data.url });
            load(data);
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
            error("Upload failed");
            abort();
          });
      },
    };
  };

  //
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setArticle({ ...article, [name]: value });
  };

  return (
    <div className="form-container">
      <Modal show={show} onHide={handleClose}>
        <form className="article-form">
          <Modal.Header closeButton>
            <h2>Ajouter Article</h2>
          </Modal.Header>
          <Modal.Body>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="title">Référence</label>
                <input
                  type="text"
                  id="reference"
                  name="reference"
                  value={article.reference}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Entrez référence article"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Désignation</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={article.designation}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Entrez la désignation article"
                />
              </div>
              <div className="form-group">
                <label htmlFor="marque">Marque</label>
                <input
                  type="text"
                  id="marque"
                  name="marque"
                  value={article.marque}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Entrez marque"
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantite">Quantité</label>
                <input
                  type="number"
                  id="qtestock"
                  name="qtestock"
                  value={article.qtestock}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Entrez quantité stock"
                />
              </div>
              <div className="form-group">
                <label htmlFor="prix">Prix</label>
                <input
                  type="number"
                  required
                  id="prix"
                  name="prix"
                  value={article.prix}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Entrez Quantité stock"
                />
              </div>
              <div className="form-group">
                <label htmlFor="prix">Catégorie</label>
                <select
                  id="scategorieID"
                  name="scategorieID"
                  className="form-control"
                  value={article.scategorieID}
                  onChange={handleChange}
                >
                  {scategories.map((scat, index) => (
                    <option key={index} value={scat._id}>
                      {scat.nomscategorie}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="prix">Image</label>
                <div style={{ width: "80%", margin: "auto", padding: "1%" }}>
                  <FilePond
                    files={files}
                    acceptedFileTypes="image/*"
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    server={serverOptions()}
                    name="file"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="form-submit-button"
              onClick={(e) => handleSubmit(e)}
            >
              Enregistrer
            </button>
            <button
              type="reset"
              className="form-reset-button"
              onClick={handleClose}
            >
              Annuler
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AddProduct;

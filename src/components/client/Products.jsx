import { useEffect, useState } from "react";
import scategorieService from "../../services/scategorieservice";

const Products = () => {
  const [scategories, setScategories] = useState([]);

  useEffect(() => {
    try {
      scategorieService
        .getAllScategories()
        .then((res) => setScategories(res.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(scategories);
  return <div>Products</div>;
};

export default Products;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductsList from "./components/admin/articles/ProductsList";
import AddProduct from "./components/admin/articles/AddProduct";
import ProductDetails from "./components/admin/articles/ProductDetails";
import UpdateProduct from "./components/admin/articles/UpdateProduct";

import UpdateCategorie from "./components/admin/categories/UpdateCategorie";
import CategorieDetails from "./components/admin/categories/CategorieDetails";
import AddCategorie from "./components/admin/categories/AddCategorie";
import CategoriesList from "./components/admin/categories/CategoriesList";

import UpdateScategorie from "./components/admin/scategories/UpdateScategorie";
import ScategorieDetails from "./components/admin/scategories/ScategorieDetails";
import AddScategorie from "./components/admin/scategories/AddScategorie";
import ScategoriesList from "./components/admin/scategories/ScategoriesList";

import Products from "./components/client/Products";

import Navbar from "./components/shared/Navbar";
import ListArticleCard from "./components/client/ListArticleCard";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListArticleCard />} />

        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products/:productId/edit" element={<UpdateProduct />} />

        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/categories/add" element={<AddCategorie />} />
        <Route path="/categories/:categorieId" element={<CategorieDetails />} />
        <Route
          path="/categories/:categorieId/edit"
          element={<UpdateCategorie />}
        />

        <Route path="/scategories" element={<ScategoriesList />} />
        <Route path="/scategories/add" element={<AddScategorie />} />
        <Route
          path="/scategories/:scategorieId"
          element={<ScategorieDetails />}
        />
        <Route
          path="/scategories/:scategorieId/edit"
          element={<UpdateScategorie />}
        />

        <Route path="/test" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

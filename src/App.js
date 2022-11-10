import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Spinner from "./components/loader/spinner";
import { Cart } from "./components/pages/cart";
import Details from "./components/pages/details";
import Products from "./components/pages/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const formattedData = data.map((item) => {
        return {
          ...item,
          count: 1
        }
      })
      setIsLoading(false);

      setProducts(formattedData);
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/products" element={<Products products={products} loading={isLoading} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Navigate replace to="/products" />} />
            <Route path={`/products/:id/details`} element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;

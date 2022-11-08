import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Products from "./components/pages/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;

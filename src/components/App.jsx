import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import Reviews from "./Reviews/Reviews.jsx";
import Layout from "./Loyout/Layout.jsx";
import Features from "../components/Features/Features.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const DetailsPage = lazy(() => import("../pages/DetailsPage/DetailsPage.jsx"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage.jsx"));
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="features" element={<Features />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

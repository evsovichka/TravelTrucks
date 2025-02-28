import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import Reviews from "./Reviews/Reviews.jsx";
import Layout from "./Loyout/Layout.jsx";
import Features from "../components/Features/Features.jsx";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/selectors.js";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const DetailsPage = lazy(() => import("../pages/DetailsPage/DetailsPage.jsx"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage.jsx"));
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      <Layout isLoading={isLoading}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="features" element={<Features />} />
            <Route path="" element={<Navigate to="features" />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
      <Toaster />
    </div>
  );
}

export default App;

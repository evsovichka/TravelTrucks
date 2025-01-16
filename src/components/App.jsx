import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import BookingForm from "./BookingForm/BookingForm.jsx";
import Orders from "./Orders/Orders.jsx";
import Layout from "./Loyout/Layout.jsx";

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
            <Route path="orders" element={<Orders />} />
            <Route path="bookingForm" element={<BookingForm />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

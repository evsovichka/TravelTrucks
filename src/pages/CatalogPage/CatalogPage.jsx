import { useDispatch } from "react-redux";
import css from "./CatalogPage.module.css";
import { fetchCampers } from "../../redux/operations.js";
import { useEffect } from "react";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>CatalogePage</h1>
    </>
  );
}

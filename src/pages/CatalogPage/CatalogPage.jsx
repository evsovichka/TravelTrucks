import { useDispatch } from "react-redux";
import css from "./CatalogPage.module.css";
import { fetchCampers } from "../../redux/operations.js";
import { useEffect } from "react";
import { equipmentList } from "../../data/equipment.jsx";
import LocationInput from "../../components/LocationInput/LocationInput.jsx";
import EquipmentsList from "../../components/EquipmentsList/EquipmentsList.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>CatalogePage</h1>
      <LocationInput />
      <EquipmentsList data={equipmentList} />
    </>
  );
}

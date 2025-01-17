import { useDispatch } from "react-redux";
import css from "./CatalogPage.module.css";
import { fetchCampers } from "../../redux/operations.js";
import { useEffect } from "react";
import { equipmentList } from "../../data/equipment.jsx";
import LocationInput from "../../components/LocationInput/LocationInput.jsx";
import EquipmentsList from "../../components/EquipmentsList/EquipmentsList.jsx";
import VehicleTypesList from "../../components/VehicleTypesList/VehicleTypesList.jsx";
import { VehicleTypes } from "../../data/vehicleTypes.jsx";
import Button from "../../components/ui/Button/Button.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <div className={css.leftBox}>
        <LocationInput />
        <p className={css.text}>Filters</p>
        <EquipmentsList data={equipmentList} />
        <VehicleTypesList data={VehicleTypes} />
        <Button>Search</Button>
      </div>
    </section>
  );
}

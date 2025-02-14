import LocationInput from "../LocationInput/LocationInput.jsx";
import EquipmentsList from "../EquipmentsList/EquipmentsList.jsx";
import VehicleTypesList from "../VehicleTypesList/VehicleTypesList.jsx";
import Button from "../ui/Button/Button.jsx";
import css from "./SideBar.module.css";

export default function SideBar({ equipmentData, size, vehicleData, onClick }) {
  return (
    <div className={css.sideBarBox}>
      <LocationInput />
      <p className={css.text}>Filters</p>
      <EquipmentsList data={equipmentData} size={size} />
      <VehicleTypesList data={vehicleData} size={size} />
      <div className={css.btn}>
        <Button onClick={onClick}>Search</Button>
      </div>
    </div>
  );
}

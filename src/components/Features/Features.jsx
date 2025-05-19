import { useSelector } from "react-redux";
import CategoriesList from "../CategoriesList/CategoriesList.jsx";
import { selectCamperById } from "../../redux/selectors.js";
import VehicleDetailsList from "../VehicleDetailsList/VehicleDetailsList.jsx";
import css from "./Features.module.css";
import { useResizeWindow } from "../../utils/resizeWindow.js";

export default function Features() {
  const camper = useSelector(selectCamperById);
  const sizeWindow = useResizeWindow();
  const isMobile = sizeWindow < 1024 ? 16 : 20;

  return (
    <div className={css.featuresBox}>
      <CategoriesList limit={0} item={camper} size={isMobile} />
      <VehicleDetailsList data={camper} />
    </div>
  );
}

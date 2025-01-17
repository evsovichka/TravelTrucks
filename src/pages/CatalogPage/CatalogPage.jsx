import { useDispatch, useSelector } from "react-redux";
import css from "./CatalogPage.module.css";
import { fetchCampers } from "../../redux/operations.js";
import { useEffect, useRef } from "react";
import { equipmentList } from "../../data/equipment.jsx";
import LocationInput from "../../components/LocationInput/LocationInput.jsx";
import EquipmentsList from "../../components/EquipmentsList/EquipmentsList.jsx";
import VehicleTypesList from "../../components/VehicleTypesList/VehicleTypesList.jsx";
import { VehicleTypes } from "../../data/vehicleTypes.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import { selectCampers, selectCurrentPage } from "../../redux/selectors.js";
import { setCurrentPage } from "../../redux/campersSlice.js";
import CardList from "../../components/CardList/CardList.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const campersItems = useSelector(selectCampers);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      dispatch(fetchCampers(currentPage));
      hasFetched.current = true;
    }
  }, [dispatch, currentPage]);

  const handleClick = () => {
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(fetchCampers(currentPage + 1));
  };
  return (
    <section className={css.section}>
      <div className={css.leftBox}>
        <LocationInput />
        <p className={css.text}>Filters</p>
        <EquipmentsList data={equipmentList} />
        <VehicleTypesList data={VehicleTypes} />
        <Button>Search</Button>
      </div>
      <div className={css.rightBox}>
        <CardList data={campersItems} />
        <Button style="loadMore" onClick={handleClick}>
          Load More
        </Button>
      </div>
    </section>
  );
}

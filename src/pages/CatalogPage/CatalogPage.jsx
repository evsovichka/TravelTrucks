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
import {
  selectCampers,
  selectCurrentPage,
  selectLimit,
  selectTotalItems,
} from "../../redux/selectors.js";
import { setCurrentPage } from "../../redux/campersSlice.js";
import CardList from "../../components/CardList/CardList.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const campersItems = useSelector(selectCampers);
  const hasFetched = useRef(false);
  const limit = useSelector(selectLimit);
  const totalItems = useSelector(selectTotalItems);
  const totalPages = totalItems / limit;

  useEffect(() => {
    if (!hasFetched.current) {
      dispatch(fetchCampers({ currentPage, limit }));
      hasFetched.current = true;
    }
  }, [dispatch, currentPage, limit]);

  const handleClick = () => {
    const nextPage = currentPage + 1;
    dispatch(setCurrentPage(nextPage));
    dispatch(fetchCampers({ currentPage: nextPage, limit }));
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
        {campersItems.length > 0 && totalPages > currentPage && (
          <Button style="loadMore" onClick={handleClick}>
            Load More
          </Button>
        )}
      </div>
    </section>
  );
}

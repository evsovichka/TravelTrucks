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
  selectEquipment,
  selectFavoriteCampers,
  selectForm,
  selectLimit,
  selectLocation,
  selectTotalItems,
} from "../../redux/selectors.js";
import { setCurrentPage, setRemoveItems } from "../../redux/campersSlice.js";
import CardList from "../../components/CardList/CardList.jsx";
import ScrollButton from "../../components/ScrollButton/ScrollButton.jsx";
import { useState } from "react";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const campersItems = useSelector(selectCampers);
  const hasFetched = useRef(false);
  const limit = useSelector(selectLimit);
  const totalItems = useSelector(selectTotalItems);
  const totalPages = totalItems / limit;
  const favorites = useSelector(selectFavoriteCampers);

  const location = useSelector(selectLocation);
  const equipment = useSelector(selectEquipment);
  const form = useSelector(selectForm);

  const [isVisible, setIsVisible] = useState(false);

  const favoriteItems = campersItems.filter((item) =>
    favorites.includes(item.id)
  );
  const nonFavoriteItems = campersItems.filter(
    (item) => !favorites.includes(item.id)
  );

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (!hasFetched.current && campersItems.length === 0) {
      dispatch(
        fetchCampers({
          currentPage,
          limit,
          filters: {},
        })
      );
      hasFetched.current = true;
    }
  }, [dispatch, currentPage, limit]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoadMoreClick = () => {
    const nextPage = currentPage + 1;
    dispatch(setCurrentPage(nextPage));
    dispatch(
      fetchCampers({
        currentPage: nextPage,
        limit,
        filters: {
          location,
          equipment,
          form,
        },
      })
    );
  };

  const handleSearchClick = () => {
    dispatch(setRemoveItems());
    localStorage.removeItem("campers");
    localStorage.removeItem("filters");
    dispatch(setCurrentPage(1));

    dispatch(
      fetchCampers({
        currentPage,
        limit,
        filters: {
          location,
          equipment,
          form,
        },
      })
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={css.section}>
      {isVisible && <ScrollButton onClick={scrollToTop} />}

      <div className={css.leftBox}>
        <LocationInput />
        <p className={css.text}>Filters</p>
        <EquipmentsList data={equipmentList} />
        <VehicleTypesList data={VehicleTypes} />
        <Button onClick={handleSearchClick}>Search</Button>
      </div>
      <div className={css.rightBox}>
        {campersItems.length > 0 ? (
          <CardList data={[...favoriteItems, ...nonFavoriteItems]} />
        ) : (
          <p className={css.title}> No proposition yet</p>
        )}
        {campersItems.length > 0 && totalPages > currentPage && (
          <div className={css.btn}>
            <Button style="loadMore" onClick={handleLoadMoreClick}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

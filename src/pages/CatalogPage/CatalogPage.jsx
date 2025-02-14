import { useDispatch, useSelector } from "react-redux";
import css from "./CatalogPage.module.css";
import { fetchCampers } from "../../redux/operations.js";
import { useEffect, useRef } from "react";
import { equipmentList } from "../../data/equipment.jsx";
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
import { useResizeWindow } from "../../utils/resizeWindow.js";
import SideBar from "../../components/SideBar/SideBar.jsx";
import { MdFilterListAlt } from "react-icons/md";

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

  const [isVisibleScrollBtn, setIsVisibleScrollBtn] = useState(false);
  const [isVisibleSideBar, setIsVisibleSideBar] = useState(false);

  const favoriteItems = campersItems.filter((item) =>
    favorites.includes(item.id)
  );
  const nonFavoriteItems = campersItems.filter(
    (item) => !favorites.includes(item.id)
  );

  const sizeWindow = useResizeWindow();
  const isMobile = sizeWindow < 768;
  const size = isMobile ? 24 : 32;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 500) {
      setIsVisibleScrollBtn(true);
    } else {
      setIsVisibleScrollBtn(false);
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

  const handleOpenScrollBar = () => {
    setIsVisibleSideBar((prevState) => !prevState);
  };
  return (
    <section className={css.section}>
      {isVisibleScrollBtn && <ScrollButton onClick={scrollToTop} />}

      {isMobile ? (
        <>
          <button
            onClick={handleOpenScrollBar}
            aria-expanded={isVisibleSideBar}
            className={css.filterBtn}
          >
            <MdFilterListAlt />
            Filters
          </button>
          {isVisibleSideBar && (
            <SideBar
              equipmentData={equipmentList}
              size={size}
              vehicleData={VehicleTypes}
              onClick={handleSearchClick}
            />
          )}
        </>
      ) : (
        <SideBar
          equipmentData={equipmentList}
          size={size}
          vehicleData={VehicleTypes}
          onClick={handleSearchClick}
        />
      )}

      <div className={css.listBox}>
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

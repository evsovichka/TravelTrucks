import { useDispatch, useSelector } from "react-redux";
import css from "./DetailsPage.module.css";
import { Outlet, useParams } from "react-router-dom";
import { fetchById } from "../../redux/operations.js";
import { Suspense, useEffect } from "react";
import { selectIsLoading, selectOneCamper } from "../../redux/selectors.js";
// import Loader from "../../components/Loader/Loader.jsx";
import StarRating from "../../components/ui/icons/StarRating.jsx";
import LocationIcon from "../../components/ui/icons/locationIcon.jsx";
import PhotoList from "../../components/PhotoList/PhotoList.jsx";
import SuspenseFallback from "../../components/SuspenseFallback/SuspenseFallback.jsx";
import ReviewsFeaturesNavList from "../../components/ReviewsFeaturesNavList/ReviewsFeaturesNavList.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const isLoading = useSelector(selectIsLoading);
  const camper = useSelector(selectOneCamper);
  const isRating = camper.rating > 0;
  console.log(camper.reviews.length);

  useEffect(() => {
    dispatch(fetchById({ id }));
  }, [dispatch, id]);

  return (
    <section className={css.section}>
      {/* {isLoading && <Loader />} */}
      <div className={css.top}>
        <div className={css.topInfoBox}>
          <p className={css.title}>{camper.name}</p>
          <div className={css.ratingLoctionWrapper}>
            <div className={css.ratingLocationBoxes}>
              <StarRating isRating={isRating} size={16} />
              <p className={css.rating}>
                {camper.rating}({camper.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.ratingLocationBoxes}>
              <LocationIcon size={16} />
              {camper.location.replace(/(.+), (.+)/, "$2, $1")}
            </div>
          </div>
          <p className={css.title}>€{camper.price}</p>
        </div>
        <PhotoList data={camper.gallery} />
        <p className={css.description}>{camper.description}</p>
      </div>
      <div className={css.bottom}>
        <ReviewsFeaturesNavList />
        <div className={css.bottombox}>
          <Suspense fallback={<SuspenseFallback />}>
            <Outlet />
          </Suspense>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

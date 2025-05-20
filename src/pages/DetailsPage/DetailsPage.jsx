import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchById } from "../../redux/operations.js";
import { Suspense, useEffect } from "react";
import {
  selectCamperById,
  selectCamperByIdLoading,
} from "../../redux/selectors.js";
import StarRating from "../../components/ui/icons/StarRating.jsx";
import LocationIcon from "../../components/ui/icons/LocationIcon.jsx";
import PhotoList from "../../components/PhotoList/PhotoList.jsx";
import SuspenseFallback from "../../components/SuspenseFallback/SuspenseFallback.jsx";
import ReviewsFeaturesNavList from "../../components/ReviewsFeaturesNavList/ReviewsFeaturesNavList.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { useResizeWindow } from "../../utils/resizeWindow.js";
import css from "./DetailsPage.module.css";

export default function DetailsPage() {
  const camper = useSelector(selectCamperById);
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoading = useSelector(selectCamperByIdLoading);

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch, id]);

  const isRating = camper.rating > 0;

  const sizeWindow = useResizeWindow();
  const isMobile = sizeWindow < 768;

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {camper && Object.keys(camper).length > 0 && (
        <section className={css.section}>
          <div className={css.link}>
            <HiOutlineArrowSmLeft
              size={isMobile ? 16 : 20}
              className={css.icon}
            />
            <Link to="/catalog">Back to catalog</Link>
          </div>

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
            <PhotoList data={camper.gallery} name={camper.name} />
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
      )}
    </>
  );
}

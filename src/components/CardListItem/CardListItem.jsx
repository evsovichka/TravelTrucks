import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "../CategoriesList/CategoriesList.jsx";
import Heart from "../ui/icons/Heart.jsx";
import LocationIcon from "../ui/icons/LocationIcon.jsx";
import StarRating from "../ui/icons/StarRating.jsx";
import { selectFavoriteCampers } from "../../redux/selectors.js";
import { addFavorite, deleteFavorite } from "../../redux/favoriteSlice.js";
import { Link } from "react-router-dom";
import css from "./CardListItem.module.css";

export default function CardListItem({ data, size }) {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(selectFavoriteCampers);
  const isFavorite = favoriteItems.includes(data.id);
  const isRating = data.rating > 0;

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(data.id));
    } else {
      dispatch(addFavorite(data.id));
    }
  };
  return (
    <div className={css.wrap}>
      <Link to={`/catalog/${data.id}`}>
        <img
          className={css.photo}
          src={data.gallery[0].original}
          alt={data.name}
        />
      </Link>
      <div className={css.infoBox}>
        <div className={css.topInfoWrap}>
          <div className={css.titlePriceWrap}>
            <p className={css.title}>{data.name}</p>
            <div className={css.priceBox}>
              <p className={css.title}>€{data.price}</p>
              <Heart
                isFavorite={isFavorite}
                onClick={handleFavoriteClick}
                size={size}
              />
            </div>
          </div>
          <div className={css.ratingLocationWrapper}>
            <Link to={`/catalog/${data.id}/reviews`}>
              <div className={css.ratingLocationBox}>
                <StarRating isRating={isRating} />
                <p className={css.rating}>
                  {data.rating}({data.reviews.length} Reviews)
                </p>
              </div>
            </Link>
            <div className={css.ratingLocationBox}>
              <LocationIcon />
              {data.location.replace(/(.+), (.+)/, "$2, $1")}
            </div>
          </div>
        </div>
        <p className={css.description}> {data.description}</p>
        <CategoriesList item={data} limit={4} size={size} />
        <Link to={`/catalog/${data.id}`} className={css.link}>
          Show More
        </Link>
      </div>
    </div>
  );
}

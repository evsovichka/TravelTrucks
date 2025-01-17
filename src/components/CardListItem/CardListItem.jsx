import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "../CategoriesList/CategoriesList";
import Button from "../ui/Button/Button";
import Heart from "../ui/icons/Heart";
import LocationIcon from "../ui/icons/locationIcon";
import StarRating from "../ui/icons/StarRating";
import css from "./CardListItem.module.css";
import { selectFavoriteCampers } from "../../redux/selectors";
import { addFavorite, deleteFavorite } from "../../redux/favoriteSlice";

export default function CardListItem({ data }) {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(selectFavoriteCampers);
  const isFavorite = favoriteItems.includes(data.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(data.id));
    } else {
      dispatch(addFavorite(data.id));
    }
  };
  return (
    <div className={css.wrap}>
      <img
        className={css.photo}
        src={data.gallery[0].original}
        alt={data.name}
      />
      <div className={css.infoBox}>
        <div className={css.topWrap}>
          <div className={css.titlePriceWrap}>
            <p className={css.title}>{data.name}</p>
            <div className={css.priceBox}>
              <p className={css.title}>€{data.price}</p>
              <Heart isFavorite={isFavorite} onClick={handleFavoriteClick} />
            </div>
          </div>
          <div className={css.ratingLocationWrapper}>
            <div className={css.ratingLocationBoxes}>
              {data.rating > 0 ? (
                <StarRating color={"#ffc531"} />
              ) : (
                <StarRating color={"#f2f4f7"} />
              )}
              <p className={css.rating}>
                {data.rating}({data.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.ratingLocationBoxes}>
              <LocationIcon size={16} />
              {data.location.replace(/(.+), (.+)/, "$2, $1")}
            </div>
          </div>
        </div>
        <p className={css.description}> {data.description}</p>
        <CategoriesList item={data} limit={4} />
        <Button style="show">Show More</Button>
      </div>
    </div>
  );
}

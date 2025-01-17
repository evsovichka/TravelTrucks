import Button from "../ui/Button/Button";
import Heart from "../ui/icons/Heart";
import LocationIcon from "../ui/icons/locationIcon";
import StarRating from "../ui/icons/StarRating";
import css from "./CardListItem.module.css";

export default function CardListItem({ data }) {
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
              <Heart />
            </div>
          </div>
          <div className={css.ratingLocationWrapper}>
            <div className={css.ratingLocationBoxes}>
              {data.rating > 0 ? (
                <StarRating color={"#ffc531"} />
              ) : (
                <StarRating color={"#f2f4f7"} />
              )}
              <p>
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
        <Button style="show">Show More</Button>
      </div>
    </div>
  );
}

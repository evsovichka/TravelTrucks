import { useSelector } from "react-redux";
import Rating from "../Rating/Rating.jsx";
import { selectOneCamper } from "../../redux/selectors.js";
import css from "./Reviews.module.css";

export default function Reviews() {
  const camper = useSelector(selectOneCamper);
  const reviews = camper.reviews;
  console.log(reviews.reviewer_rating);
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {reviews.map((review, index) => {
          return (
            <li key={index} className={css.item}>
              <div className={css.topWrap}>
                <div className={css.avatarSymbol}>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </div>
                <div className={css.nameRatingBox}>
                  <p>{review.reviewer_name}</p>
                  <Rating data={review.reviewer_rating} />
                </div>
              </div>
              <p className={css.text}>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

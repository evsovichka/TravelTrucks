import StarRating from "../ui/icons/StarRating";
import css from "./Rating.module.css";

export default function Rating({ data }) {
  const totalStars = 5;
  const stars = [];
  const rating = Math.max(0, Math.min(totalStars, Number(data) || 0));
  for (let i = 1; i <= totalStars; i++) {
    const isRating = i <= rating;
    stars.push(<StarRating key={i} isRating={isRating} size={16} />);
  }
  return <div className={css.stars}>{stars}</div>;
}

import css from "./BookingForm.module.css";
import Button from "../ui/Button/Button.jsx";

export default function BookingForm() {
  return (
    <div className={css.box}>
      <div className={css.textBox}>
        <p className={css.title}>Book your campervan now</p>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Button>Send</Button>
    </div>
  );
}

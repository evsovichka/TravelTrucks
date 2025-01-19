import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./Form.module.css";
import toast from "react-hot-toast";
import Button from "../ui/Button/Button.jsx";

const bookingSchema = Yup.object().shape({
  username: Yup.string().min(2, "Short").max(30, "Long").required("Required"),
  email: Yup.string().email("Not valid").required("Required"),
  date: Yup.array()
    .required("Required")
    .min(2, "Select both start and end dates")
    .of(Yup.date().required("Date is required")),
  comment: Yup.string(),
});

const initialValues = {
  username: "",
  email: "",
  date: [new Date(), null],
  comment: "",
};

const formforbooking = () => {
  const id = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    toast.success("Your booking has been successfully confirmed!");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={bookingSchema}
    >
      {({ setFieldValue, values, errors }) => (
        <Form className={css.form}>
          <div className={css.inputContainer}>
            <Field
              type="text"
              name="username"
              id={`${id}-username`}
              placeholder="Name*"
              className={`${css.formInput} ${
                errors.username ? css.errorInput : ""
              }`}
            />
            <ErrorMessage
              name="username"
              component="span"
              className={css.errorMessage}
            />
          </div>
          <div className={css.inputContainer}>
            <Field
              type="text"
              name="email"
              id={`${id}-email`}
              placeholder="Email*"
              className={`${css.formInput} ${
                errors.email ? css.errorInput : ""
              }`}
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css.errorMessage}
            />
          </div>
          <div className={css.inputContainer}>
            <DatePicker
              selectsRange
              startDate={values.date[0]}
              endDate={values.date[1]}
              minDate={new Date()}
              onChange={(update) => {
                setFieldValue("date", update);
              }}
              isClearable={true}
              dateFormat="yyyy/MM/dd"
              placeholderText="Booking date*"
              className={`${css.formInput} ${
                errors.date ? css.errorInput : ""
              }`}
              calendarClassName={css.customCalendar}
            />
            {errors.date && (
              <span className={css.errorMessage}>{errors.date}</span>
            )}
          </div>
          <div>
            <Field
              as="textarea"
              name="comment"
              id={`${id}-comment`}
              placeholder="Comment"
              className={css.textarea}
            />
          </div>
          <div className={css.button}>
            <Button>Send</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default formforbooking;

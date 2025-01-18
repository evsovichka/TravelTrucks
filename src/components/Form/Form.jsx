import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./Form.module.css";

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
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={bookingSchema}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.form}>
          <div>
            <Field
              type="text"
              name="username"
              id={`${id}-username`}
              placeholder="Name*"
              className={css.formInput}
            />
            <ErrorMessage name="username" component="span" />
          </div>
          <div>
            <Field
              type="text"
              name="email"
              id={`${id}-email`}
              placeholder="Email*"
              className={css.formInput}
            />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <DatePicker
              selectsRange
              startDate={values.date[0]}
              endDate={values.date[1]}
              onChange={(update) => {
                setFieldValue("date", update);
              }}
              isClearable={true}
              dateFormat="yyyy/MM/dd"
              placeholderText="Booking date*"
              className={css.formInput}
            />
            <ErrorMessage name="date" component="span" />
          </div>
          <div>
            <Field
              as="textarea"
              name="comment"
              id={`${id}-comment`}
              placeholder="Comment"
              className={css.textarea}
            />
            <ErrorMessage name="comment" component="span" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default formforbooking;

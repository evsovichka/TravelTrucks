import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const feedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Short").max(30, "Long").required("Required"),
  email: Yup.string().email("Not valid").required("Required"),
  date: Yup.date()
    .required("Required")
    .nullable()
    .typeError("Invalid date format")
    .min(new Date(), "Date cannot be in the past"),
  comment: Yup.string(),
});

const initialValues = {
  username: "",
  email: "",
  date: new Date(),
  comment: "",
};

import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";

const ContactForm = ({ addNewContact }) => {
  const handleSubmit = (values, actions) => {
    addNewContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: "",
        number: "",
      }}
    >
      <Form className={s.container}>
        <label className={s.containerLabel}>
          Name
          <Field type="text" name="name" />
        </label>
        <label className={s.containerLabel}>
          Number
          <Field type="text" name="number" />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};

export default ContactForm;

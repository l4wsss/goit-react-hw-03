import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";

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
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
        </label>
        <label>
          Number
          <Field type="text" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};

export default ContactForm;

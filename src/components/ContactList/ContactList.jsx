import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ contacts }) => {
  return (
    <>
      <ul className={s.wrapper}>
        <Contact contacts={contacts} />
      </ul>
    </>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactList;

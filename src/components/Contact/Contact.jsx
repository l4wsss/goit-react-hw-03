import PropTypes from "prop-types";
import s from "./Contact.module.css";

const Contact = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.container}>
          <div className={s.containerInfo}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
          </div>
          <button type="button">Delete</button>
        </li>
      ))}
    </>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Contact;

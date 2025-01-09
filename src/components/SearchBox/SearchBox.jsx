import PropTypes from "prop-types";

const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <label>
        <span>Find contacts by name</span>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;

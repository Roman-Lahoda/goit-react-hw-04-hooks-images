import PropTypes from "prop-types";

const Button = ({ text, func }) => {
  return (
    <button type="buttton" onClick={func} className="Button">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  func: PropTypes.func,
};

export default Button;

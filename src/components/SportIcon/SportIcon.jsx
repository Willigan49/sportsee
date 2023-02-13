import PropTypes from "prop-types";

export default function SportIcon({ icon }) {
  return (
    <div className="sport-icon">
      <img src={icon} alt="sport icon" />
    </div>
  );
}

SportIcon.proptype = {
  icon: PropTypes.string.isRequired,
};

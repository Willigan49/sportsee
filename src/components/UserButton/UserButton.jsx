import userIcon from "../../assets/icons/user.svg";
import PropTypes from "prop-types";

/**
 * 
 * @param {string} fullname
 * @returns {JSX.Element} React component
 */
export default function UserButton({ fullName }) {
  return (
    <div className="user-button">
      <img src={userIcon} alt="user icon" />
      <p>{fullName}</p>
    </div>
  );
}

UserButton.proptype = {
  fullName: PropTypes.string.isRequired,
};

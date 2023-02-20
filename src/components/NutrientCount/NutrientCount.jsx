import PropTypes from "prop-types";

/**
 * Display nutrient count component
 * @param {string} nutrientCount
 * @param {string} icon
 * @param {string} nutrientType
 * @param {string} color
 * @returns {JSX.Element} nutrient count component
 */
export default function NutrientCount({
  nutrientCount,
  icon,
  nutrientType,
  color,
}) {
  return (
    <div className="nutrient">
      <div className={`icon--${color}`}>
        <img src={icon} alt="nutrient icon" />
      </div>
      <div className="count">
        <p>{nutrientCount}</p>
        <p className="nutrient-type">{nutrientType}</p>
      </div>
    </div>
  );
}

NutrientCount.prototype = {
  nutrientCount: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  nutrientType: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

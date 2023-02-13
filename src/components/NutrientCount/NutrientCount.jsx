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

import bike from "../../assets/icons/bike.svg";
import bodybuilding from "../../assets/icons/bodybuilding.svg";
import reflexion from "../../assets/icons/reflexion.svg";
import swim from "../../assets/icons/swim.svg";

export default function Drawer() {
  const sports = [reflexion, swim, bike, bodybuilding];
  const sportList = sports.map((sport) => (
    <li key={sports.indexOf(sport)}>
      <img src={sport} alt="sport icon" />
    </li>
  ));
  const copyright = "Copiryght, SportSee 2020";

  return (
    <div className="drawer">
      <ul>{sportList}</ul>
      <p>{copyright}</p>
    </div>
  );
}

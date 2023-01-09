import logo from "../../assets/logo.svg";
import bike from "../../assets/icons/bike.svg";
import bodybuilding from "../../assets/icons/bodybuilding.svg";
import reflexion from "../../assets/icons/reflexion.svg";
import swim from "../../assets/icons/swim.svg";
import { Outlet } from "react-router-dom";
import SportIcon from "../../components/SportIcon/SportIcon";
import getAllUsers from "../../api/user";

export async function userLoader() {
  const users = await getAllUsers();
  console.log(users);
  return { users };
}

export default function Root() {
  const menuItem = ["Accueil", "Profil", "Réglage", "Communauté"];
  const sports = [reflexion, swim, bike, bodybuilding];

  return (
    <div className="wrapper">
      <div className="header">
        <img src={logo} alt="logo de l'application" />
        <div className="menu">
          <ul>
            {menuItem.map((item) => (
              <li key={menuItem.indexOf(item)}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="drawer">
          <ul>
            {sports.map((sport) => (
              <li key={sports.indexOf(sport)}>
                <SportIcon icon={sport} />
              </li>
            ))}
          </ul>
          <p>Copiryght, SportSee 2020</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

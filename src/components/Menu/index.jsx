export default function Menu() {
  const menuItem = ["Accueil", "Profil", "Réglage", "Communauté"];
  const listMenu = menuItem.map((item) => <li>{item}</li>);
  return (
    <div className="menu">
      <ul>{listMenu}</ul>
    </div>
  );
}

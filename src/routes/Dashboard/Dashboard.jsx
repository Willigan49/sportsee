import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const { user } = useLoaderData();

  return (
    <div className="dashboard">
      <div>
        <h1>
          Bonjour <span className="name">{user.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="stats">
        <div className="graphics">
          <div className="daily-activities"></div>
          <div className="graphics-bottom">
            <div className="duration"></div>
            <div className="radar"></div>
            <div className="score"></div>
          </div>
        </div>
        <div className="calories">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

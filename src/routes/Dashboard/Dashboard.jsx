import { useLoaderData } from "react-router-dom";
import Nutrients from "../../components/Nutrients/Nutrients";
import burgerIcon from "../../assets/icons/burger.svg";
import meatIcon from "../../assets/icons/meat.svg";
import appleIcon from "../../assets/icons/apple.svg";
import fireIcon from "../../assets/icons/fire.svg";
import Score from "../../components/Score/Score";
import DailyActivities from "../../components/DailyActivities/DailyActivities";

export default function Dashboard() {
  const { user } = useLoaderData();

  return (
    <div className="dashboard">
      <div>
        <h1>
          Bonjour <span className="name">{user.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="stats">
        <div className="graphics">
          <div className="daily-activities">
            <DailyActivities activities={user.activities} />
          </div>
          <div className="graphics-bottom">
            <div className="duration"></div>
            <div className="radar"></div>
            <div className="score">
              <Score score={user.dayScore} label={user.scorePercentage} />
            </div>
          </div>
        </div>
        <div className="nutrients">
          <Nutrients
            nutrientCount={user.calories}
            icon={fireIcon}
            nutrientType="Calories"
            color="red"
          />
          <Nutrients
            nutrientCount={user.proteins}
            icon={meatIcon}
            nutrientType="Proteines"
            color="blue"
          />
          <Nutrients
            nutrientCount={user.carbohydrates}
            icon={appleIcon}
            nutrientType="Glucides"
            color="yellow"
          />
          <Nutrients
            nutrientCount={user.lipids}
            icon={burgerIcon}
            nutrientType="Lipides"
            color="pink"
          />
        </div>
      </div>
    </div>
  );
}

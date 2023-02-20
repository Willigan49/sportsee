import { useLoaderData } from "react-router-dom";
import NutrientCount from "../../components/NutrientCount/NutrientCount";
import burgerIcon from "../../assets/icons/burger.svg";
import meatIcon from "../../assets/icons/meat.svg";
import appleIcon from "../../assets/icons/apple.svg";
import fireIcon from "../../assets/icons/fire.svg";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import DailyActivitiesChart from "../../components/DailyActivitiesChart/DailyActivitiesChart";
import SessionChart from "../../components/SessionChart/SessionChart";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";

/**
 * Display dashboard page
 * @returns {JSX.Element} dashboard page
 */
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
            <DailyActivitiesChart activities={user.activities} />
          </div>
          <div className="graphics-bottom">
            <div className="average">
              <SessionChart averages={user.sessionsWithDays} />
            </div>
            <div className="radar">
              <PerformanceChart performances={user.fullPerformances} />
            </div>
            <div className="score">
              <ScoreChart score={user.dayScore} label={user.scorePercentage} />
            </div>
          </div>
        </div>
        <div className="nutrients">
          <NutrientCount
            nutrientCount={user.calories}
            icon={fireIcon}
            nutrientType="Calories"
            color="red"
          />
          <NutrientCount
            nutrientCount={user.proteins}
            icon={meatIcon}
            nutrientType="Proteines"
            color="blue"
          />
          <NutrientCount
            nutrientCount={user.carbohydrates}
            icon={appleIcon}
            nutrientType="Glucides"
            color="yellow"
          />
          <NutrientCount
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

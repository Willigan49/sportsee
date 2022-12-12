export default function Home() {
  return (
    <div className="home">
      <div>
        <h1>
          Bonjour <span className="name">Guillaume</span>
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

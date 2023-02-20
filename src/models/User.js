export default class User {
  constructor(infoData, activityData, sessionData, performanceData) {
    this.id = infoData.data.id;
    this.userInfos = infoData.data.userInfos;
    this.dayScore = !infoData.data.todayScore
      ? infoData.data.score
      : infoData.data.todayScore;
    this.counts = infoData.data.keyData;
    this.activities = activityData.data.sessions;
    this.averages = sessionData.data.sessions;
    this.performanceKinds = performanceData.data.kind;
    this.performances = performanceData.data.data;
  }

  get sessionsWithDays() {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const result = this.averages.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
      dayLetter: days[session.day - 1],
    }));
    return result;
  }

  get fullPerformances() {
    const translate = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"]
    const result = this.performances.map((value, index) => ({
      value: value.value,
      performance: translate[value.kind - 1],
    }));
    return result;
  }

  get fullName() {
    return `${this.userInfos.firstName} ${this.userInfos.lastName}`;
  }

  get calories() {
    return `${this.counts.calorieCount} kCal`;
  }

  get proteins() {
    return `${this.counts.proteinCount} g`;
  }

  get carbohydrates() {
    return `${this.counts.carbohydrateCount} g`;
  }

  get lipids() {
    return `${this.counts.lipidCount} g`;
  }

  get scorePercentage() {
    return `${this.dayScore * 100}%`;
  }
}

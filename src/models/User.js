export default class User {
  constructor(infoData, activityData, sessionData, performanceData) {
    this.id = infoData.data.data.id;
    this.userInfos = infoData.data.data.userInfos;
    this.dayScore = !infoData.data.data.todayScore
      ? infoData.data.data.score
      : infoData.data.data.todayScore;
    this.counts = infoData.data.data.keyData;
    this.activities = activityData.data.data.sessions;
    this.averages = sessionData.data.data.sessions;
    this.performanceKinds = performanceData.data.data.kind;
    this.performances = performanceData.data.data.data;
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
    const result = this.performances.map((value, index) => ({
      value: value.value,
      performance: this.performanceKinds[index + 1],
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

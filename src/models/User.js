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

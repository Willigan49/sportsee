export default class User {
  constructor({ data }) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.score = !data.score ? data.todayScore : data.score;
    this.calorieCount = data.keyData.calorieCount;
    this.proteinCount = data.keyData.proteinCount;
    this.carbohydrateCount = data.keyData.carbohydrateCount;
    this.lipidCount = data.keyData.lipidCount;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get calories() {
    return `${this.calorieCount} kCal`;
  }

  get proteins() {
    return `${this.proteinCount} g`;
  }

  get carbohydrates() {
    return `${this.carbohydrateCount} g`;
  }

  get lipids() {
    return `${this.lipidCount} g`;
  }

  get scorePercentage() {
    return `${this.score * 100}%`;
  }
}

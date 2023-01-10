export default class User {
  constructor(
    id,
    firstName,
    lastName,
    age,
    score,
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.score = score;
    this.calorieCount = calorieCount;
    this.proteinCount = proteinCount;
    this.carbohydrateCount = carbohydrateCount;
    this.lipidCount = lipidCount;
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
    return `${this.score * 100}%`
  }
}

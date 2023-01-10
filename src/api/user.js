import api from "./api";
import User from "../models/User";

export async function getAllUsers() {
  try {
    let userOne = await api.get("user/12");
    userOne = new User(
      userOne.data.data.id,
      userOne.data.data.userInfos.firstName,
      userOne.data.data.userInfos.lastName,
      userOne.data.data.userInfos.age,
      userOne.data.data.todayScore,
      userOne.data.data.keyData.calorieCount,
      userOne.data.data.keyData.proteinCount,
      userOne.data.data.keyData.carbohydrateCount,
      userOne.data.data.keyData.lipidCount
    );
    let userTwo = await api.get("user/18");
    userTwo = new User(
      userTwo.data.data.id,
      userTwo.data.data.userInfos.firstName,
      userTwo.data.data.userInfos.lastName,
      userTwo.data.data.userInfos.age,
      userTwo.data.data.score,
      userTwo.data.data.keyData.calorieCount,
      userTwo.data.data.keyData.proteinCount,
      userTwo.data.data.keyData.carbohydrateCount,
      userTwo.data.data.keyData.lipidCount
    );
    return [userOne, userTwo];
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getUser(id) {
  let response = await api.get(`user/${id}`);
  response = new User(
    response.data.data.id,
    response.data.data.userInfos.firstName,
    response.data.data.userInfos.lastName,
    response.data.data.userInfos.age,
    response.data.data.todayScore
      ? response.data.data.todayScore
      : response.data.data.score,
    response.data.data.keyData.calorieCount,
    response.data.data.keyData.proteinCount,
    response.data.data.keyData.carbohydrateCount,
    response.data.data.keyData.lipidCount
  );
  return response;
}

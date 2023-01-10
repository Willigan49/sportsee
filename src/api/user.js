import api from "./api";
import User from "../models/User";

export default async function getAllUsers() {
  try {
    let userOne = await api.get("user/12");
    userOne = new User(
      userOne.data.data.id,
      userOne.data.data.userInfos.firstName,
      userOne.data.data.userInfos.lastName,
      userOne.data.data.userInfos.age
    );
    let userTwo = await api.get("user/18");
    userTwo = new User(
      userTwo.data.data.id,
      userTwo.data.data.userInfos.firstName,
      userTwo.data.data.userInfos.lastName,
      userTwo.data.data.userInfos.age
    );
    return [userOne, userTwo];
  } catch (error) {
    console.log(error);
    return error;
  }
}

import api from "./api";
import User from "../models/User";

export default async function getAllUsers() {
  const userOne = await api.get("user/12").then((res) => {
    return new User(res.data.data.id, res.data.data.userInfos.firstName, res.data.data.userInfos.lastName, res.data.data.userInfos.age);
  });
  return userOne;
}

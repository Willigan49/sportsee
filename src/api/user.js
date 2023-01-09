import api from "./api";
import User from "../models/User";

export default async function getAllUsers() {
  let res = await api.get("user/12");
  const userOne = new User(
    res.data.data.id,
    res.data.data.userInfos.firstName,
    res.data.data.userInfos.lastName,
    res.data.data.userInfos.age
  );
  console.log(userOne);
  return userOne;
}

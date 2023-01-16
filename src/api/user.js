import api from "./api";
import User from "../models/User";

export async function getAllUsers() {
  try {
    const userOne = await api.get("user/12");
    const userOneData = new User(userOne.data);
    const userTwo = await api.get("user/18");
    const userTwoData = new User(userTwo.data);
    return [userOneData, userTwoData];
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getUser(id) {
  try {
    let { data } = await api.get(`user/${id}`);
    return new User(data);
  } catch (error) {
    console.log(error);
  }
}

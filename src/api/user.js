import api from "./api";
import User from "../models/User";

export async function getAllUsers() {
  try {
    const userOne = await getUser("12");
    const userTwo = await getUser("18");
    return [userOne, userTwo];
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getUser(id) {
  try {
    const infoData = await api.get(`${id}`);
    const activityData = await api.get(`${id}/activity`);
    const sessionData = await api.get(`${id}/average-sessions`);
    const performanceData = await api.get(`${id}/performance`);
    return new User(infoData, activityData, sessionData, performanceData);
  } catch (error) {
    console.log(error);
  }
}

import api from "./api";
import User from "../models/User";
import axios from "axios";

/**
 * Get user by axios or by mock
 * @param {number} id
 * @returns {User} data - User object
 */
export async function getMockOrData(id) {
  if (id !== "10") {
    return await getUser(id);
  } else {
    const mock = await axios.get("http://172.20.233.44:3001/mock.json");
    return new User(
      mock.data.infoData,
      mock.data.activityData,
      mock.data.sessionData,
      mock.data.performanceData
    );
  }
}

/**
 * Get user by an id
 * @param {number} id
 * @returns {User} data - User object
 */
async function getUser(id) {
  try {
    const infoData = await api.get(`${id}`);
    console.log(infoData.data);
    const activityData = await api.get(`${id}/activity`);
    const sessionData = await api.get(`${id}/average-sessions`);
    const performanceData = await api.get(`${id}/performance`);
    return new User(
      infoData.data,
      activityData.data,
      sessionData.data,
      performanceData.data
    );
  } catch (error) {
    console.log(error);
  }
}

import axios from "axios";
import { BASE_URL } from "../constants/constant";
import { showErrorAlert, showSuccessAlert } from "./alert";

const updateUser = async (id, updatedUser, onSuccess) => {
  try {
    await axios.put(`${BASE_URL}users/${id}`, updatedUser);
    showSuccessAlert("User updated successfully.", onSuccess);
  } catch (err) {
    showErrorAlert("Failed to update user.");
    throw err;
  }
};
export default updateUser;

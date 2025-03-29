import Swal from "sweetalert2";

export const showSuccessAlert = (message, callback = null) => {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: message,
    confirmButtonColor: "#8AB2A6",
  }).then(() => {
    if (callback) callback();
  });
};

export const showErrorAlert = (message) => {
  Swal.fire({
    icon: "error",
    title: "Error!",
    text: message,
    confirmButtonColor: "#3E3F5B",
  });
};

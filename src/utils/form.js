import { emailRegex, nameRegex, phoneRegex } from "constants";
export const isEmail = (email) => {
  if (email.match(emailRegex)) {
    return true;
  }
  return false;
};

export const isValidName = (name) => {
  if (name.match(nameRegex)) {
    return true;
  }
  return false;
};

export const isValidPhone = (phone) => {
  if (phone.match(phoneRegex)) {
    return true;
  }
  return false;
};

import axios from 'axios';
import { endPointOfTheAPI } from '../Endpoint';

const url = endPointOfTheAPI();

export const registerUser = async (name, password, email, isAdmin = false) => {
  data = {
    name: name,
    password: password,
    email: email,
    isAdmin: isAdmin
  };
  const response = await axios.post(`${url}/api/users`, data);
  return response;
};

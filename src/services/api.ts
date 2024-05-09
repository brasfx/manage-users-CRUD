import axios from 'axios';
import { User } from '@type/user';

const url = import.meta.env.VITE_BASE_URL;

export const login = async () => {
  const response = await axios.get(`${url}/users`);
  return response.data;
};

export const getAllUsers = async (name?: string) => {
  let params = {};
  if (name) {
    params = { name };
  }

  const response = await axios.get(`${url}/users`, {
    params: params,
  });

  return response.data;
};

export const addUser = async (user: User) => {
  const response = await axios.post(`${url}/users`, user);
  return response.data;
};

export const updateUser = async (id: string, data: User) => {
  const response = await axios.put(`${url}/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axios.delete(`${url}/users/${id}`);
  return response.status === 200;
};

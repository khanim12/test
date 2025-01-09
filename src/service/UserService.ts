import axios from "axios";
import { UserType } from "../types/userType";

export const fetchUser = async(): Promise<UserType[]> => {
  const { data } = await axios.get<UserType[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};
export const postUser = async(user:UserType) => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/users",user
  );
  return data 
};

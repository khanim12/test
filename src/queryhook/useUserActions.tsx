import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUserActions = () => {
  const fetchUser = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  };
  const useGetAllUser = () => {
    return useQuery({
      queryKey: ["getuser"],
      queryFn: fetchUser,
    });
  };

  return { useGetAllUser };
};


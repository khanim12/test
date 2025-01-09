import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUser, postUser } from "../service/UserService";
import { UserType } from "../types/userType";

export const useUserActions = () => {
  const queryClient=useQueryClient()
  const useGetAllUser = () => {
    return useQuery({
      queryKey: ["user"],
      queryFn: fetchUser,
    });
  };
const addUser=useMutation({
  mutationFn:(user:UserType)=>postUser(user),
  onSuccess:()=>{
    queryClient.invalidateQueries({queryKey:"user"})
  }

})
  return { useGetAllUser ,addUser};
};


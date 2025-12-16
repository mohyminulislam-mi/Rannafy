import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useChef = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: chef = {}, isLoading } = useQuery({
    queryKey: ["chef", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`users/email?email=${user.email}`);
      return res.data;
    }
  });
  
  return {
    chefId: chef?.chefId,
    chef,
    isLoading,
  };
};

export default useChef;

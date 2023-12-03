import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useTeacherRole = () => {
  const axiosSecure = useAxiosSecure();
  const { data: teachers = [] } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/teacherRequest");
      return res.data;
    },
  });
  return [teachers];
};

export default useTeacherRole;

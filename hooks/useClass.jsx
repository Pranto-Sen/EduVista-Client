import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProvider';

const useClass = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);
    const { data: classes = [], refetch } = useQuery({
      queryKey: ["classes", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/classes?email=${user?.email}`);
        return res.data;
      },
    });
    return [classes, refetch];
};

export default useClass;

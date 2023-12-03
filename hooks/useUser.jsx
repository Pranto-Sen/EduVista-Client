
// import useAxiosSecure from './useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

// const useUser = () => {
//     const axiosSecure = useAxiosSecure();
//     const { data: user = [] } = useQuery({
//         queryKey: ['user'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/users');
//             return res.data;
//         }
//     })
//     return [user]
// };

// export default useUser;
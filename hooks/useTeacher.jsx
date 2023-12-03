// import { useContext } from 'react';
// import useAxiosSecure from './useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
// import { AuthContext } from '../Providers/AuthProvider';

// const useTeacher = () => {
//     const { user} = useContext(AuthContext);
//     const axiosSecure = useAxiosSecure();
//     const { data: teacher } = useQuery({
//       queryKey: ["teacher"],
//       queryFn: async () => {
//         const res = await axiosSecure.get(`teacher/${user.email}`);
//         console.log(res.data);
//         return res.data;
//       },
//       // Set the stale time to 1 minute (adjust as needed)
//     });

//     // const { data: teacher } = useQuery({
//     //   queryKey: ["teacher"],
//     //   queryFn: async () => {
//     //       const res = await axiosSecure.get(`teacher/${user.email}`);
//     //       console.log(res.data);
//     //     return res.data;
//     //   },
//     // });
//     return teacher;
// };

// export default useTeacher;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useTeacher = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isTeacher, isPending: isTeacherLoading } = useQuery({
    queryKey: [user?.email, "isTeacher"],
    enabled: !loading,
    queryFn: async () => {
      console.log("asking or checking is teacher", user);
      const res = await axiosSecure.get(`teacher/${user.email}`);
     console.log(user.email);
      return res.data?.teacher;
    },
  });
  return [isTeacher, isTeacherLoading];
};

export default useTeacher;


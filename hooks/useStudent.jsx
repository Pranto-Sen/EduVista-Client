
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";

// const useStudent = () => {
//   const { user, loading } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();

//   const { data: isStudent, isPending: isStudentLoading } = useQuery({
//     queryKey: [user?.email, "isStudent"],
//     enabled: !loading,
//     queryFn: async () => {
//       try {
//         console.log("asking or checking is Student", user);
//         const res = await axiosSecure.get(`student/${user.email}`);
//         console.log("API Response:", res.data);
//         return res.data?.student; // Return false if data is undefined
//       } catch (error) {
//         console.error("Error fetching student data:", error);
//         return false; // Return false in case of an error
//       }
//     },
//   });

//   return [isStudent, isStudentLoading];
// };

// export default useStudent;

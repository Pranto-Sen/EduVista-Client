import React, { useContext } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const EnrollClass = () => {
       const axiosSecure = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);
    
    const { data: enrollclasses = [], refetch } = useQuery({
        
         queryKey: ["enrollclasses", user?.email],
         queryFn: async () => {
           const res = await axiosSecure.get(
             `/enrollclasses?email=${user?.email}`
             );
                console.log('dsd',enrollclasses);
           return res.data;
         },
         
       });
    return <div>your enroll class: {enrollclasses.length}</div>;
};

export default EnrollClass;
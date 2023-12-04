import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/Home/AllClasses/AllClasses";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ApplyTeacher from "../Pages/ApplyTeacher/ApplyTeacher";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import User from "../Pages/Dashboard/User/User";
import TeacherRequest from "../Pages/Dashboard/TeacherRequest/TeacherRequest";
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import UpdateClass from "../Pages/Dashboard/MyClass/UpdateClass";
import DetailsClass from "../Pages/Dashboard/MyClass/DetailsClass";
import AllClass from "../Pages/Dashboard/AllClass/AllClass";
import Class from "../Pages/Dashboard/AllClass/Class";
import Proile from "../Pages/Dashboard/Profile/Proile";
import ClassDetails from "../Pages/Home/AllClasses/ClassDetails";
import Payment from "../Pages/Home/AllClasses/Payment";
import EnrollClass from "../Pages/Dashboard/EnrollClass/EnrollClass";
// import Dashboard from "../Layout/Dashboard";
// import MyClass from './../Pages/Dashboard/MyClass/MyClass';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/class/:id",
        element: <ClassDetails></ClassDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/class/${params.id}`),
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },

      {
        path: "/applyTeacher",
        element: (
          <PrivateRoute>
            <ApplyTeacher></ApplyTeacher>
          </PrivateRoute>
        ),
      },
      {
        path: "/allClass",
        element: (
          <PrivateRoute>
            <AllClasses></AllClasses>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "users", // Relative path to the parent "/dashboard"
        element: (
          <AdminRoute>
            <User></User>
          </AdminRoute>
        ),
      },
      {
        path: "teacherRequest", // Relative path to the parent "/dashboard"
        element: <TeacherRequest></TeacherRequest>,
      },
      {
        path: "addClass", // Relative path to the parent "/dashboard"
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass", // Relative path to the parent "/dashboard"
        element: <MyClass></MyClass>,
      },
      {
        path: "myEnrollClass", // Relative path to the parent "/dashboard"
        element: <EnrollClass></EnrollClass>,
      },
      {
        path: "update/:id",
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "my-class/:id",
        element: <DetailsClass></DetailsClass>,
      },
      {
        path: "allClass",
        element: <AllClass></AllClass>,
      },
      {
        path: "class/:id",
        element: <Class></Class>,
      },
      {
        path: "profile",
        element: <Proile></Proile>,
      },
    ],
  },
]);

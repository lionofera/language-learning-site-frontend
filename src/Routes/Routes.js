import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Course from "../Pages/Course/Course";
import CourseCategories from "../Pages/CourseCategories/CourseCategories";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/course-categories/:id",
                element: <CourseCategories></CourseCategories>
            },
            {
                path  : "/course/:id",
                element: <Course></Course>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)

            }
            
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])
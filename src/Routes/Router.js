import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import CardDetails from "../Components/Card/CardDetails";
import Category from "../Components/Category/Category";
import Home from "../Components/Home/Home";
import Terms from "../Components/terms/Terms";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/categories/:id',
                element:<Category></Category>,
                loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)

            },
            {
                path:'/course/:id',
                element:<CardDetails></CardDetails>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<Terms></Terms>
            }
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Home from "./Layouts/Home";
import Error from "./Components/Error";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Destination from "./Components/Destination";
import DestinationDetails from "./Page/DestinationDetails";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Page/Login";
import Register from "./Page/Register";
import PrivateRoute from "./PrivateRoute";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        
    },
    {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
    },
    {
        path: '/destination',
        element: <Destination></Destination>,
    },
    {
        path: '/destination/:destinationId', 
        element: <PrivateRoute>
                        <DestinationDetails></DestinationDetails>
                 </PrivateRoute> 
    },
    {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);

export default Router;
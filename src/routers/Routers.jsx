import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { Children } from "react";
import About from "../components/About";
import StudentEnquiryForm from "../components/AdmissionForm";
import HomePage from "../components/Home";
import Gallery from "../components/Gallery";
import Result from "../components/Result";
import Contact from "../components/ContactUs";
import ResultsPage from "../components/Result";


const MainRouter = ({Children}) => {
    const routesData = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
            errorElement : <h1>Home Page Error</h1>
        },
        {
            path: "/aboutus",
            element: <About/>,
            errorElement : <h1>Home Page Error</h1>
        },
        {
            path: "/admission",
            element: <StudentEnquiryForm/>,
            errorElement : <h1>Home Page Error</h1>
        },
        {
            path:"/gallery",
            element:<Gallery/>,
            errorElement: <h1>Gallery Page error</h1>
        },
        {
            path:"/result",
            element:<ResultsPage/>,
            errorElement: <h1>Result Page error</h1>
        },
        {
            path:"/contact",
            element:<Contact/>,
            errorElement:<h1>Contact page error</h1>
        }
    ])
    return (
        <React.Fragment>
          <RouterProvider router={routesData}>{Children}</RouterProvider>
        </React.Fragment>
      );
    };
    
    export default MainRouter;
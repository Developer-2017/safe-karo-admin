import Home from "./components/Home/Home";
import Signin from "./components/Auth/auth/signin";
import SignUp from "./components/Auth/auth/signup";
import Role from "./components/Role/role";
import Vehicle from "./components/vehicle/vehicle";
import VehicleSubType from "./components/vehicle/vehicleSubType";

const routes =[
 {
    path: "/",
    //element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Signin />,
      },
    ],
},
{
    path: "/signup",
    //element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <SignUp />,
      },
    ],
},
{
    path: "/home",
    //element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
},
{
  path: "/role",
  //element: <DashboardLayout />,
  children: [
    {
      path: "",
      element: <Role />,
    },
  ],
},
{
  path: "/vehicle",
  //element: <DashboardLayout />,
  children: [
    {
      path: "",
      element: <Vehicle />,
    },
  ],
},
{
  path: "/vehiclesubtype",
  //element: <DashboardLayout />,
  children: [
    {
      path: "",
      element: <VehicleSubType />,
    },
  ],
},
]

export default routes


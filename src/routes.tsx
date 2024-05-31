import Signin from "./components/Auth/signin";
import SignUp from "./components/Auth/signup";
import Role from "./components/Role/role";
import AddVehicle from "./components/vehicle/vehicle/AddVehicle/AddVehicle";
import AddLead from "./components/Agent/AddLead/AddLead";
import Dashboard from "./components/Dashboard/dashboard";
import VehicleSubType from "./components/vehicle/VehicleType/VehicleSubType";
import AddCaseType from "./components/CaseType/AddCaseType/AddCaseType";

const routes = [
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
    path: "/dashboard",
    //element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/lead",
    //element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <AddLead />,
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
        element: <AddVehicle />,
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
  {
    path: "casetype",
    //element: <DashboardLayout />,
    children: [
      {
        path: "/casetype/add",
        element: <AddCaseType />,
      },
      {
        path: "",
        element: <AddCaseType />,
      },
    ],
  },
];

export default routes;

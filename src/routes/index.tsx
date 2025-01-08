import { Navigate } from "react-router-dom";
import DCards from "@/pages/DCards";
import TravelWebsite from "@/pages/TravelWebsite";
import { Dashboard } from "@/pages/Dashboard";

const routes = [
  { path: "/", element: <Navigate to="/dashboard" /> },
  {
    path: "/dcard",
    element: <DCards />,
  },
  {
    path: "/travel",
    element: <TravelWebsite />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export default routes;

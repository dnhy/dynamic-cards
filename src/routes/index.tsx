import { Navigate } from "react-router-dom";
import DCards from "@/pages/DCards";
import TravelWebsite from "@/pages/TravelWebsite";

const routes = [
  { path: "/", element: <Navigate to="/travel" /> },
  {
    path: "/dcard",
    element: <DCards />,
  },
  {
    path: "/travel",
    element: <TravelWebsite />,
  },
];

export default routes;

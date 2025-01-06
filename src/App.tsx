import routes from "./routes/index";
import { useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;

import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import routes from "./routes/index";
import { useRoutes } from "react-router-dom";
function App() {
    const element = useRoutes(routes);
    return _jsx(_Fragment, { children: element });
}
export default App;

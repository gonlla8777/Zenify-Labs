import { Routes, Route } from "react-router-dom";
import { routesName } from "../assets/utils/routesName/routesName.js";
import Homepanel from "../page/Homepanel.jsx";
import Embudo from "../page/Embudo.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routesName.homepanel} element={<Homepanel />} />
      <Route path={routesName.embudo} element={<Embudo />} />
    </Routes>
  );
};

export default AppRouter;

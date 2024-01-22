import { Routes, Route } from "react-router-dom";
import { routesName } from "../assets/utils/routesName/routesName.js";
import Homepanel from "../page/Homepanel.jsx";
import Embudo from "../page/Embudo.jsx";
import DataList from "../page/DataList.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routesName.homepanel} element={<Homepanel />} />
      <Route path={routesName.embudo} element={<Embudo />} />
      <Route path={routesName.datalist} element={<DataList />} />
    </Routes>
  );
};

export default AppRouter;

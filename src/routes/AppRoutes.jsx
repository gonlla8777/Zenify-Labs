import { Routes, Route } from "react-router-dom";
import { routesName } from "../assets/utils/routesName/routesName.js";
import Homepanel from "../page/Homepanel.jsx";
import Embudo from "../page/Embudo.jsx";
import DataList from "../page/DataList.jsx";
import SendMails from "../page/SendMails.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routesName.homepanel} element={<Homepanel />} />
      <Route path={routesName.embudo} element={<Embudo />} />
      <Route path={routesName.datalist} element={<DataList />} />
      <Route path={routesName.sendMails} element={<SendMails />} />
    </Routes>
  );
};

export default AppRouter;

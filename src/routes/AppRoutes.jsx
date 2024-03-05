import { Routes, Route } from "react-router-dom";
import { routesName } from "../assets/utils/routesName/routesName.js";
import Homepanel from "../page/Homepanel.jsx";
import Embudo from "../page/Embudo.jsx";
import DataList from "../page/DataList.jsx";
import SendMails from "../page/SendMails.jsx";
import Automation from "../page/Automation.jsx";
import Login from "../page/Login.jsx";
import Register from "../page/Register.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routesName.login} element={<Login />} />
      <Route path={routesName.register} element={<Register />} />
      <Route path={routesName.homepanel} element={<Homepanel />} />
      <Route path={routesName.embudo} element={<Embudo />} />
      <Route path={routesName.datalist} element={<DataList />} />
      <Route path={routesName.sendMails} element={<SendMails />} />
      <Route path={routesName.automation} element={<Automation />} />
    </Routes>
  );
};

export default AppRouter;

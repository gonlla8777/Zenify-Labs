import { Routes, Route, Navigate } from 'react-router-dom'

import Homepanel from '../page/Homepanel.jsx'
import Embudo from '../page/Embudo.jsx'
import DataList from '../page/DataList.jsx'
import SendMails from '../page/SendMails.jsx'
import Automation from '../page/Automation.jsx'
import Login from '../page/Login.jsx'
import Register from '../page/Register.jsx'
import EmailTemplates from '../page/EmailTemplates.jsx'
import NotFound from '../page/NotFound.jsx' // Importa tu componente de página de error 404
import { routesName } from '../assets/utils/routesName/routesName.js'
import { useUser } from '../context/hooks.js'

const AppRouter = () => {
  const { isEmpty } = useUser()

  return (
    <Routes>
      <Route
        path={routesName.login}
        element={isEmpty ? <Login /> : <Navigate to={routesName.homepanel} />}
      />
      <Route
        path={routesName.register}
        element={
          isEmpty ? <Register /> : <Navigate to={routesName.homepanel} />
        }
      />
      <Route
        path={routesName.homepanel}
        element={!isEmpty ? <Homepanel /> : <Navigate to={routesName.login} />}
      />
      <Route
        path={routesName.embudo}
        element={!isEmpty ? <Embudo /> : <Navigate to={routesName.login} />}
      />
      <Route
        path={routesName.datalist}
        element={!isEmpty ? <DataList /> : <Navigate to={routesName.login} />}
      />
      <Route
        path={routesName.sendMails}
        element={!isEmpty ? <SendMails /> : <Navigate to={routesName.login} />}
      />
      <Route
        path={routesName.emailTemplates}
        element={
          !isEmpty ? <EmailTemplates /> : <Navigate to={routesName.login} />
        }
      />
      <Route
        path={routesName.automation}
        element={!isEmpty ? <Automation /> : <Navigate to={routesName.login} />}
      />
      {/* Route para manejar todas las demás rutas */}
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  )
}

export default AppRouter

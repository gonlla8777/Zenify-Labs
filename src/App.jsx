import AppRouter from './routes/AppRoutes'
import Navbar from './page/Navbar'
import './index.css'
import LanguageProvider from './context/providers/LanguageProvider'
import UserProvider from './context/providers/UserProvider'

function App() {
  return (
    <div className='bg-gradient-to-r from-neutral-800  to-neutral-900  w-auto h-auto min-h-screen min-w-screen'>
      <LanguageProvider>
        <UserProvider>
          <Navbar />
          <div className='justify-items-center text-center mx-auto'>
            <AppRouter />
          </div>
        </UserProvider>
      </LanguageProvider>
    </div>
  )
}

export default App

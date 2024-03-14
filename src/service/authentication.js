import { useNavigate } from 'react-router-dom'
import { routesName } from '../assets/utils/routesName/routesName'
import { useUser } from '../context/hooks'
import api from './api'

const useAuth = () => {
  const { setIsEmpty } = useUser()
  const navigate = useNavigate()
  const handleAuthError = (error) => {
    console.error('Error al autenticar:', error)
  }

  const handleSignOutError = (error) => {
    console.error('Error al cerrar sesión:', error)
  }

  const handleAuthSuccess = (user, redirectPath) => {
    const name = user.first_name
    const photoURL = user.profile_photo
    localStorage.setItem(
      'user',
      JSON.stringify({
        user,
        name,
        photoURL
      })
    )
    console.log('Usuario autenticado:', user)

    setIsEmpty(() => {
      navigate(redirectPath, { replace: true })
      return false
    })
  }

  const handleSignOutSuccess = () => {
    localStorage.removeItem('user')

    console.log('Sesión cerrada correctamente')
    setIsEmpty(true)
  }

  const signIn = (credentials) => {
    return api
      .fetchPostEndpoint('login', credentials)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
          handleAuthSuccess(response.data.data, routesName.homepanel)
        }
      })
      .catch(handleAuthError)
  }

  const signUp = (credentials) => {
    return api
      .fetchPostEndpoint('register', credentials)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data)
          handleAuthSuccess(response.data.data, routesName.homepanel)
        }
      })
      .catch(handleAuthError)
  }

  const signOut = () => {
    return api
      .fetchPostEndpoint('logout')
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
        }

        handleSignOutSuccess()
      })
      .catch(handleSignOutError)
  }

  return { signOut, signIn, signUp }
}

export { useAuth }

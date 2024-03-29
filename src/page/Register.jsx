import { FaGoogle } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../assets/data/data.json'

import { useAuth } from '../service/authentication' // Cambio en la importación
import { useGoogleAuth } from '../service/firebase'
import { useLanguage } from '../context/hooks'

const Register = () => {
  const { language } = useLanguage()
  const { signUp } = useAuth() // Usar el hook useAuthentication
  const { signInWithGoogle } = useGoogleAuth()

  const [credentials, setCredentials] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp(credentials).then(() => {
      setCredentials({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
      })
    })
  }

  return (
    <>
      <div className='w-auto min-h-screen h-auto '>
        <div className='grid  sm:grid-cols-2 grid-cols-1 gap-1'>
          <div className=' pl-2 sm:pl-10 pt-20'>
            <p className='bg-clip-text text-transparent bg-gradient-to-r from-stone-700 to-stone-500 text-xl md:text-4xl lg:text-7xl uppercase font-bold  '>
              {data[language].register.motivationalText}{' '}
              <span className='text-green-600'>
                {data[language].register.motivationalTextGreen}
              </span>
            </p>
          </div>
          <div className='static    col-span-1  w-fit grid  justify-items-center mx-auto bg-neutral-700/30 p-10 rounded-lg text-white border-neutral-700 border-4 shadow-neutral-700/50 shadow-lg hover:scale-105 transition-all min-w-72'>
            <h1 className='font-bold text-3xl'>
              {data[language].register.register}
            </h1>
            <form
              onSubmit={handleSubmit}
              className=''
            >
              <div className='mt-10'>
                <p className='text-neutral-400 font-extralight text-left'>
                  {data[language].register.username} <br />
                  <input
                    className='w-full rounded-sm border border-neutral-600 '
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className='mt-5'>
                <p className='text-neutral-400 font-extralight text-left'>
                  {data[language].register.firstName} <br />
                  <input
                    className='w-full rounded-sm border border-neutral-600 '
                    type='text'
                    name='first_name'
                    value={credentials.first_name}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className='mt-5'>
                <p className='text-neutral-400 font-extralight text-left'>
                  {data[language].register.lastName} <br />
                  <input
                    className='w-full rounded-sm border border-neutral-600 '
                    type='text'
                    name='last_name'
                    value={credentials.last_name}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className='mt-5'>
                <p className='text-neutral-400 font-extralight text-left'>
                  {data[language].register.email} <br />
                  <input
                    className='w-full rounded-sm border border-neutral-600 '
                    type='email'
                    name='email'
                    value={credentials.email}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className='mt-5'>
                <p className='text-neutral-400 font-extralight text-left'>
                  {data[language].register.password}
                  <br />
                  <input
                    className='w-full rounded-sm border border-neutral-600 '
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className='mt-5'>
                <p className='text-neutral-400 font-extralight text-left'>
                  {data[language].register.confirmPassword}
                  <br />
                  <input
                    className='w-full rounded-sm border border-neutral-600 '
                    type='password'
                    name='confirm_password'
                    value={credentials.confirm_password}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className=' divide-neutral-700 divide-y-2'>
                <div>
                  <button
                    type='submit'
                    className='bg-[#469C4A] p-5 m-5 rounded-xl hover:scale-105 hover:bg-[#378a3b] transition-all '
                  >
                    {data[language].register.register}
                  </button>
                </div>
                <div>
                  <div className='flex justify-center text-black text-xl mt-2 '>
                    <button
                      className='bg-neutral-400 p-5 rounded-xl border-neutral-700 border-2 hover:scale-105 hover:shadow-md hover:shadow-neutral-600 transition-all '
                      onClick={signInWithGoogle}
                    >
                      <FaGoogle />
                    </button>
                  </div>
                </div>
                <div className='text-neutral-400 font-extralight text-center mt-2 '>
                  <p>{data[language].register.alreadyHaveAccount}</p>
                  <Link to={'/'}>
                    <p className='text-neutral-400 underline decoration-1 font-extralight text-center cursor-pointer hover:text-neutral-300 transition-all'>
                      {data[language].register.toLogin}
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register

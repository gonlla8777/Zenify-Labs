import { useState } from 'react'
import { IoSettings } from 'react-icons/io5'

import { MdOutlineLogin } from 'react-icons/md'
import { useAuth } from '../../service/authentication' // Cambio en la importación
import { useLanguage } from '../../context/hooks'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { signOut } = useAuth()

  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage)
  }

  return (
    <div>
      <button>
        <IoSettings
          className={`absolute right-10 top-5 text-white text-4xl  hover:transition-all hover:animate-spin hover:animate-duration-[2s] hover:animate-once cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </button>
      {isOpen && (
        <div className='absolute top-12 mt-4 right-0 w-48 bg-neutral-600 rounded-lg text-white divide-y divide-gray-500 px-2 transition-all ease-in duration-300 '>
          <div className='text-white  py-2  cursor-pointer hover:text-zinc-500'>
            {language === 'english' && (
              <button onClick={() => handleLanguageChange('spanish')}>
                Español
              </button>
            )}
            {language === 'spanish' && (
              <button onClick={() => handleLanguageChange('english')}>
                English
              </button>
            )}
          </div>
          <button
            className=' py-2  cursor-pointer hover:text-zinc-500 flex items-center'
            onClick={() => signOut().then(() => window.location.reload())}
          >
            Log Out
            <MdOutlineLogin className='ml-2 text-2xl  cursor-pointer' />
          </button>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu

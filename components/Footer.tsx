import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'


const Footer = ({type = 'desktop'}: {type: string}) => {
 
const router = useRouter();

  const handleLogout = () => {
    router.push('/sign-in');
  };
 
    return (
    <footer className='footer mt-9'>
        <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">
            JK
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
          <h1 className="text-14 truncate text-gray-700 font-semibold">
           Jonas
          </h1>
          <p className="text-14 truncate font-normal text-gray-600">
            jonas@gmail.com
          </p>
      </div>

      <div className="footer_image" onClick={handleLogout}>
        <LogOut className='h-full w-full text-black flex items-center'/>
      </div>
    </footer>
  )
}

export default Footer

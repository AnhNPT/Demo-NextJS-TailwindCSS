/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function headers(){
    return(
      <div>

      <div className='font-lato bg-neutral-1 py-20px'>
        <div className="container">
          <div className='flex flex-row justify-between items-center columns-1 md:columns-3'>
            <div className="logo">
              <img src="/images/Logo.svg" alt='logo' />
            </div>
            <div className="menu flex flex-row columns-6 justify-between items-center d-none w-1/2">
              <Link href="/">
                <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='menu-1'>Home</a>
              </Link>
              <Link href="/services">
                <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='menu-2'>Service</a>
              </Link>
              <Link href="#">
                <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='menu-3'>Projects</a>
              </Link>
              <Link href="#">
                <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='menu-4'>About</a>
              </Link>
              <Link href="#">
                <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='menu-5'>News</a>
              </Link>
              <Link href="#">
                <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='menu-6'>Contact</a>
              </Link>
            </div>
            <div className="lang-btn text-neutral-6 cursor-pointer d-none">EN</div>
          </div>
        </div>
      </div>
      
      </div>
    )
}
/* eslint-disable @next/next/no-img-element */
export default function headers(){
    return(
      <div className='font-lato bg-neutral-1 py-20px'>
        <div className="container">
          <div className='flex flex-row justify-between items-center columns-1 md:columns-3'>
            <div className="logo">
              <img src="/Logo.svg" alt='logo' />
            </div>
            <div className="menu flex flex-row columns-6 justify-between items-center d-none w-1/2">
              <a href="#"
                className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out">Home</a>
              <a href="#"
                className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out">Service</a>
              <a href="#"
                className="text-neutral-6 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out">Projects</a>
              <a href="#"
                className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out">About</a>
              <a href="#"
                className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out">News</a>
              <a href="#"
                className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out">Contact</a>
            </div>
            <div className="lang-btn text-neutral-6 cursor-pointer d-none">EN</div>
          </div>
        </div>
      </div>
    )
}
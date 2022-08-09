/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {useEffect} from 'react';



export default function Headers() {


  useEffect  (() => {
      var path = window.location.pathname;
      var home = document.getElementById('home');
      var services = document.getElementById('service');
      var projects = document.getElementById('projects');
      var about = document.getElementById('about');
      var news = document.getElementById('news');
      var contact = document.getElementById('contact');
      if(path == '/'){
        home.classList.add('menu-active');
      } else if(path == '/about-us'){
        about.classList.add('menu-active');
      } else if(path == '/services'){
        services.classList.add('menu-active')
      } else if (path == '/projects'){
        projects.classList.add('menu-active');
      }
  })

  

  return (

    <div className='font-lato bg-neutral-1 py-20px'>
      <div className="container">
        <div className='flex flex-row justify-between items-center columns-1 md:columns-3'>
          <div className="logo">
            <img src="/images/Logo.svg" alt='logo' />
          </div>
          <div className="menu flex flex-row columns-6 justify-between items-center d-none w-1/2">
            <Link href="/">
              <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='home'>Home</a>
            </Link>
            <Link href="/services">
              <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='service'>Service</a>
            </Link>
            <Link href="/projects">
              <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='projects'>Projects</a>
            </Link>
            <Link href="/about-us">
              <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='about'>About</a>
            </Link>
            <Link href="#">
              <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='news'>News</a>
            </Link>
            <Link href="#">
              <a className="text-neutral-3 cursor-pointer hover:text-neutral-6 transition duration-200 ease-in-out" id='contact'>Contact</a>
            </Link>
          </div>
          <div className="lang-btn text-neutral-6 cursor-pointer d-none">EN</div>
        </div>
      </div>
    </div>

  )

}
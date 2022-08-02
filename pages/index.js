import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trang chủ</title>
      </Head>
      {/* Header */}
      <Header />

      {/* Banner */}
      <div className="bg-[url('/Banner.png')] bg-cover bg-no-repeat">
        <div className="container">
          <div className="font-playfair text-neutral-6 pt-560px">
            <hr className="divider-2" />
            <span className="block text-60px leading-80px font-medium">
              Welcome to
            </span>
            <span className="block leading-100px text-80px font-bold">HBH Architects</span>
          </div>
          <div className="flex flex-col font-lato text-neutral-6 items-center mt-70px pb-40px cursor-pointer"
            id="scrollBtn">
            <span className="leading-20px text-14px font-medium block">Scroll down</span>
            <img src='/arrow-down.svg' alt="" className="w-24px" />
          </div>
        </div>
      </div>

      {/* Welcome */}
      <div className="container h-full mt-100px mb-120px" id="welcomeSection">
        <div className="flex flex-row flex-wrap columns-1 h-full 2xl:columns-2 xl:columns-2 lg:columns-2 md:columns-1">
          <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full">
            <img src='/Group 625982.png' alt="" />
          </div>
          <div className="flex flex-col w-full h-auto font-playfair justify-center pl-0 mt-16px 2xl:w-1/2 2xl:pl-40px xl:w-1/2 xl:pl-40px lg:w-1/2 lg:pl-40px md:w-full md:pl-0 md:mt-16px">
            <span className="block font-medium leading-32px text-24px text-secondary-1">#welcome</span>
            <span className="block text-primary-1 font-bold text-40px leading-60px">LET YOUR HOME BE UNIQUE AND STYLISH</span>
            <hr className="divider-3"></hr>
          </div>
        </div>
      </div>

      {/* Feature Project */}
      <div className="container">
        <div className="grid grid-responsive gap-4">
          <div className="col-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1">
            <img src='/Home/Rectangle 315.png' alt="" className="w-full" />
            <span className="mt-24px block text-24px leading-32px font-bold font-playfair text-primary-1">Woodenist
              House Lumberjack</span>
            <span className="mt-12px block text-18px font-medium leading-28px text-secondary-1 font-lato">Architecture /
              Vietnam</span>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col">
              <img src='/Home/Rectangle 316-1.png' alt="" className="w-full" />
              <span className="mt-24px block text-24px leading-32px font-bold font-playfair text-primary-1">Woodenist
                House Lumberjack</span>
              <span className="mt-12px block text-18px font-medium leading-28px text-secondary-1 font-lato">Architecture / Vietnam</span>
            </div>
            <div className="flex flex-col mt-40px">
              <img src='/Home/Rectangle 316.png' alt="" className="w-full" />
              <span className="mt-24px block text-24px leading-32px font-bold font-playfair text-primary-1">Woodenist
                House Lumberjack</span>
              <span
                className="mt-12px block text-18px font-medium leading-28px text-secondary-1 font-lato">Architecture
                / Vietnam</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-start mt-60px 2xl:justify-end xl:justify-end lg:justify-end md:justify-start">
          <a href="" className="flex flex-row">
            <span className="block font-lato leading-28px text-18px font-medium text-neutral-2 mr-12px">View All Project</span>
            <img src='/arrow-right.svg' alt="" />
          </a>
        </div>
      </div>

      {/* Service */}
      <div className="container mt-100px">
        <div className="text-center">
          <span className="block font-playfair text-primary-1 leading-52px text-36px font-bold">Services</span>
          <span className="block font-playfair text-secondary-1 leading-32px text-24px font-medium">What we do, We provide quality services</span>
        </div>
        <div className="flex flex-row flex-wrap justify-between mt-60px">
          <div className="border text-primary-1 hover:text-secondary-2 border-neutral-5 w-full flex flex-row justify-center items-center px-113px py-82px hover:bg-accent-1 transition-all 2xl:w-31p xl:w-31p lg:w-31p md:w-full servicesCtn ">
            <span className="block font-playfair leading-32px font-bold text-24px text-center">Urban Planning</span>
          </div>
          <div className="border text-primary-1 hover:text-secondary-2 border-neutral-5 w-full flex flex-row justify-center items-center px-113px mt-40px py-82px hover:bg-accent-1 transition-all 2xl:w-31p 2xl:mt-0 xl:w-31p xl:mt-0 lg:w-31p lg:mt-0 md:w-full servicesCtn md:mt-40px">
            <span className="block font-playfair leading-32px font-bold text-24px text-center">Urban Planning</span>
          </div>
          <div className="border text-primary-1 hover:text-secondary-2 border-neutral-5 w-full flex flex-row justify-center items-center px-113px py-82px mt-40px hover:bg-accent-1 transition-all 2xl:w-31p 2xl:mt-0 xl:w-31p xl:mt-0 lg:w-31p lg:mt-0 md:w-full servicesCtn md:mt-40px">
            <span className="block font-playfair leading-32px font-bold text-24px text-center">Urban Planning</span>
          </div>
          <div className="border text-primary-1 hover:text-secondary-2 border-neutral-5 w-full flex flex-row justify-center items-center px-113px py-82px mt-40px hover:bg-accent-1 transition-all 2xl:w-31p xl:w-31p lg:w-31p md:w-full servicesCtn">
            <span className="block font-playfair leading-32px font-bold text-24px text-center">Urban Planning</span>
          </div>
          <div className="border text-primary-1 hover:text-secondary-2 border-neutral-5 w-full flex flex-row justify-center items-center px-113px py-82px mt-40px hover:bg-accent-1 transition-all 2xl:w-31p xl:w-31p lg:w-31p md:w-full servicesCtn">
            <span className="block font-playfair leading-32px font-bold text-24px text-center">Urban Planning</span>
          </div>
          <div className="border text-primary-1 hover:text-secondary-2 border-neutral-5 w-full flex flex-row justify-center items-center px-113px py-82px mt-40px hover:bg-accent-1 transition-all 2xl:w-31p xl:w-31p lg:w-31p md:w-full servicesCtn">
            <span className="block font-playfair leading-32px font-bold text-24px text-center">Urban Planning</span>
          </div>
        </div>
      </div>

      {/* Latest New */}
      <div className="container mt-100px mb-120px">
        <div className="text-center">
          <span className="block font-playfair text-primary-1 leading-52px text-36px font-bold">Latest News</span>
          <span className="block font-playfair text-secondary-1 leading-32px text-24px font-medium">Always update new information</span>
        </div>
        <div className="flex flex-row flex-wrap justify-between mt-60px">
          <div className="w-full flex flex-col 2xl:w-31p xl:w-31p lg:w-31p md:w-full newCtn">
            <a href="">
              <img src='/post/Rectangle 70-1.png' alt="" className="w-full" />
              <span className="block font-lato font-medium text-16px leading-24px text-neutral-2 mt-24px">Architects <span className="font-medium text-14px leading-20px text-neutral-4">/ July 1, 2022</span></span>
              <span className="block font-playfair text-24px leading-32px font-bold text-secondary-2 mt-16px" id="title1">Twin Forestland Home</span>
              <span className="block font-lato leading-24px text-16px font-medium text-neutral-2 mt-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tempor incididunt ut labore et dolore magna aliqua. Ut enim mini veniam, quis nostrud.</span>
            </a>
          </div>
          <div className="w-full flex flex-col 2xl:w-31p 2xl:mt-0 xl:w-31p xl:mt-0 lg:w-31p lg:mt-0 md:w-full newCtn md:mt-32px mt-32px">
            <a href="">
              <img src='/post/Rectangle 70-1.png' alt="" className="w-full" />
              <span className="block font-lato font-medium text-16px leading-24px text-neutral-2 mt-24px">Architects <span className="font-medium text-14px leading-20px text-neutral-4">/ July 1, 2022</span></span>
              <span className="block font-playfair text-24px leading-32px font-bold text-secondary-2 mt-16px" id="title2">Twin Forestland Home</span>
              <span className="block font-lato leading-24px text-16px font-medium text-neutral-2 mt-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tempor incididunt ut labore et dolore magna aliqua. Ut enim mini veniam, quis nostrud.</span>
            </a>
          </div>
          <div className="w-full flex flex-col 2xl:w-31p 2xl:mt-0 xl:w-31p xl:mt-0 lg:w-31p lg:mt-0 md:w-full newCtn md:mt-32px mt-32px">
            <a href="">
              <img src='/post/Rectangle 70-1.png' alt="" className="w-full" />
              <span className="block font-lato font-medium text-16px leading-24px text-neutral-2 mt-24px">Architects  <span className="font-medium text-14px leading-20px text-neutral-4">/ July 1, 2022</span></span>
              <span className="block font-playfair text-24px leading-32px font-bold text-secondary-2 mt-16px" id="title3">Twin Forestland Home</span>
              <span className="block font-lato leading-24px text-16px font-medium text-neutral-2 mt-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tempor incididunt ut labore et dolore magna aliqua. Ut enim mini veniam, quis nostrud.</span>
            </a>
          </div>
        </div>
        <div className="flex flex-row w-full justify-start mt-60px 2xl:justify-end xl:justify-end lg:justify-end md:justify-start">
          <a href="" className="flex flex-row">
            <span className="block font-lato leading-28px text-18px font-medium text-neutral-2 mr-12px">View All Project</span>
            <img src='/arrow-right.svg' alt="" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer/>

    </div>
  )
}


if (typeof window !== "undefined") {
  var newContainer = document.querySelectorAll('.newCtn');
  for (let i = 0; i < newContainer.length; i++) {
    newContainer[i].addEventListener('mouseover', function () {
      document.getElementById('title1').style = 'color: red';
    })
    newContainer[i].addEventListener('mouseout', function () {
      document.getElementById('title1').style = 'color: #5168b5';
    })
  };
  document.getElementById('scrollBtn').addEventListener('click', function () {
    document.getElementById('welcomeSection').scrollIntoView({ behavior: 'smooth' });
  })
}
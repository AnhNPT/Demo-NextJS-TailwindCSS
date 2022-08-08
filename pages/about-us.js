/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/no-img-element */
import Header from '../components/header';
import Footer from '../components/footer';
import { useEffect } from 'react';



export default function AboutUs() {


    useEffect(() => {

        import('tiny-slider').then(({ tns }) => {
            var slider = tns({
                container: '.my-slider',
                items: 6,
                fixedWidth: 300,
                autoplay: true,
                center: true,
                mouseDrag: true,
                controls: false,
                autoplayButtonOutput: false,
                autoplayButtonOutput: false,
                // rewind: true,
                "speed": 500,
            });
            var sliders = tns({
                container: '.my-slider-2',
                items: 6,
                // autoWidth: true,
                fixedWidth: 300,
                autoplay: true,
                center: true,
                mouseDrag: true,
                controls: false,
                autoplayButtonOutput: false,
                autoplayButtonOutput: false,
                // rewind: true,
                "speed": 400,
            });
        });

        import('countup.js').then(({ CountUp }) => {
            var countUp1 = new CountUp('count1', 7, { enableScrollSpy: true });
            var countUp2 = new CountUp('count2', 100, { enableScrollSpy: true });
            var countUp3 = new CountUp('count3', 30, { enableScrollSpy: true });
            var countUp4 = new CountUp('count4', 3, { enableScrollSpy: true });
        });

        document.getElementById('achievement').addEventListener('scroll', () =>{
            countUp1.start();
            countUp2.start();
            countUp3.start();
            countUp4.start();
        })

    })

    return (
        <div>

            {/* Header */}
            <Header />

            {/* Who we are */}
            <div className="bg-neutral-1">
                <div className="container">
                    <div className="flex flex-col-reverse flex-wrap columns-2 2xl:flex-row xl:flex-row lg:flex-row">
                        <div className="flex flex-col 2xl:w-50p 2xl:mt-60px xl:w-50p xl:mt-60px lg:w-50p lg:mt-60px md:w-full w-full mt-32px">
                            <span className="block text-neutral-6 text-16px font-medium leading-24px font-lato">- Who we are</span>
                            <span className="block font-playfair text-neutral-6 mt-16px font-bold text-36px leading-52px tracking-2p 2xl:w-60p xl:w-50p lg:w-80p md:w-full sm:w-full w-full">We design living spaces that brings tranquility and comfort.</span>
                            <span className="block font-playfair text-neutral-4 mt-20px font-bold text-18px leading-28px">Based in
                                Vietnam<br />Working Worldwide</span>
                            <span className="block font-lato text-neutral-6 mt-24px font-medium text-16px leading-24px mb-60px text-justify 2xl:w-80p xl:w-80p lg:w-80p md:w-full w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius vitae mollis ornare. Vitae orci mauris at tincidunt eleifend id risus. Libero aliquam ultrices laoreet vitae habitant morbi. Venenatis dolor sed urna ut. Phasellus aliquam nunc, a nunc consequat commodo eu.</span>
                        </div>
                        <div className="flex flex-col mt-32px w-full 2xl:w-50p 2xl:mt-100px 2xl:-mb-100px xl:w-50p xl:mt-100px xl:-mb-100px lg:w-50p lg:mt-100px lg:-mb-100px md:w-full">
                            <img src="images/Rectangle2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* What we do */}
            <div className=" bg-neutral-4/10 mt-unset pb-124px pt-100px 2xl:mt-160px xl:mt-160px lg:mt-160px md:mt-unset">
                <div className="container">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex flex-col w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full">
                            <span className="block font-playfair text-center text-primary-1 mt-20px font-bold text-36px leading-52px 2xl:text-left xl:text-left lg:text-left md:text-center">What we do</span>
                            <span className="block font-playfair text-secondary-1 mt-16px font-medium text-24px leading-32px text-center 2xl:text-left xl:text-left lg:text-left md:text-center">The soul of your architectural<br />and landscape solutions</span>
                            <span className="mt-32px block font-lato text-secondary-1 font-medium text-16px leading-24px text-justify w-full 2xl:w-70p xl:w-70p lg:w-70p md:w-full">HBH Architects & Partners now employs over 10 architects who have experience in delivering projects both in Vietnam and overseas. Core team members of HBH Architects & Partners have been highly educated and working extensively in Vietnam and Australia. HBH Architects & Partners can also communicate well with Client and Investor both in English and Vietnamese in all meetings or emails. Therefore, HBH Architects & Partners has experience in delivering high quality projects through all stages of design, documentation and construction. Upon requests or demanded by Clients, we can also collaborate or form a team with international offices all over the world to deliver successful projects anywhere.</span>
                        </div>
                        <div className="flex flex-col w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full">
                            <span className="block font-playfair text-neutral-1 mt-20px font-bold text-18px leading-28px">About us</span>
                            <hr className="divider" />
                            <span className="flex-row mt-20px cursor-pointer w-fit hidden text-neutral-2 leading-28px font-medium 2xl:flex xl:flex lg:flex md:hidden text-18px">View all Projects <img src="images/arrow-right.svg" className="ml-3" alt="" />
                            </span>
                            <img src="images/Rectangle7.png" className="mt-32px 2xl:mt-93px xl:mt-93px lg:mt-93px md:mt-32px" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap mt-100px">
                        <div className="flex flex-col w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full">
                            <span className="font-playfair text-primary-1 text-36px leading-52px font-bold text-center 2xl:text-left xl:text-left lg:text-left md:text-center">Our Value</span>
                            <span className="font-playfair text-secondary-1 text-center text-24px leading-32px font-medium 2xl:text-left xl:text-left lg:text-left md:text-center">Strong values that bring great <br /> people together</span>
                        </div>
                        <div className="flex flex-col w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full">
                            <div className="vision">
                                <span className="block font-playfair text-neutral-1 mt-20px font-bold text-18px leading-28px">About us</span>
                                <hr className="divider" />
                                <span className="block mt-20px font-lato leading-24px text-16px font-medium text-neutral-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius vitae mollis ornare. Vitae orci mauris at tincidunt eleifend id risus. Libero aliquam ultrices laoreet vitae habitant morbi. Venenatis dolor sed urna ut. Phasellus aliquam nunc, a nunc consequat commodo eu.</span>
                            </div>
                            <div className="vision">
                                <span className="block font-playfair text-neutral-1 mt-20px font-bold text-18px leading-28px">About
                                    us</span>
                                <hr className="divider" />
                                <span className="block mt-20px font-lato leading-24px text-16px font-medium text-neutral-2">Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit. Proin varius vitae mollis ornare.
                                    Vitae orci mauris at tincidunt eleifend id risus. Libero aliquam ultrices laoreet vitae
                                    habitant morbi. Venenatis dolor sed urna ut. Phasellus aliquam nunc, a nunc consequat
                                    commodo eu. </span>
                            </div>
                            <div className="vision">
                                <span className="block font-playfair text-neutral-1 mt-20px font-bold text-18px leading-28px">About us</span>
                                <hr className="divider" />
                                <span className="block mt-20px font-lato leading-24px text-16px font-medium text-neutral-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius vitae mollis ornare. Vitae orci mauris at tincidunt eleifend id risus. Libero aliquam ultrices laoreet vitae habitant morbi. Venenatis dolor sed urna ut. Phasellus aliquam nunc, a nunc consequat commodo eu.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our achievement */}
            <div className="mt-100px" id='achievement'>
                <div className="container">
                    <div className="flex flex-col flex-wrap text-center">
                        <span className="font-playfair text-primary-1 font-bold text-36px leading-52px">Our Achievement in
                            Numbers</span>
                        <span className="font-playfair font-medium text-24px leading-32px text-secondary-1">Bringing Innovation,
                            Quality and Control to your projects</span>
                    </div>
                    <div className="flex flex-row flex-wrap columns-2 2xl:columns-4 xl:columns-4 lg:columns-4 md:columns-2">
                        <div className="flex flex-col w-1/2 items-center 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/2">
                            <span className="block mt-40px font-playfair font-bold leading-100px text-80px text-secondary-2"><span
                                id="count1">7</span>+</span>
                            <span className="font-lato font-medium block mt-16px text-16px leading-24px text-primary-1">Years
                                experience</span>
                        </div>
                        <div className="flex flex-col w-1/2 items-center 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/2">
                            <span className="block mt-40px font-playfair font-bold leading-100px text-80px text-secondary-2"><span
                                id="count2">100</span>+</span>
                            <span className="font-lato font-medium block mt-16px text-16px leading-24px text-primary-1">Projects</span>
                        </div>
                        <div className="flex flex-col w-1/2 items-center 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/2">
                            <span className="block mt-40px font-playfair font-bold leading-100px text-80px text-secondary-2"><span
                                id="count3">30</span>+</span>
                            <span className="font-lato font-medium block mt-16px text-16px leading-24px text-primary-1">Members</span>
                        </div>
                        <div className="flex flex-col w-1/2 items-center 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/2">
                            <span className="block mt-40px font-playfair font-bold leading-100px text-80px text-secondary-2"><span
                                id="count4">3</span></span>
                            <span className="font-lato font-medium block mt-16px text-16px leading-24px text-primary-1">Country</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Team */}
            <div className="mt-100px">
                <div className="container">
                    <div className="flex flex-col flex-wrap items-center">
                        <span className="font-playfair text-primary-1 font-bold text-36px leading-52px">Meet Our Team</span>
                        <span className="font-playfair font-medium text-24px leading-32px text-secondary-1">People That Make Impossible Possible</span>
                    </div>
                    <div className="grid grid-col mt-60px">
                        <div className="flex flex-col">
                            <img src="images/4.png" className="bg-neutral-5" alt="" />
                            <span className="font-playfair block text-primary-1 font-bold leading-32px text-24px mt-20px">Kristin Watson</span>
                            <div className="flex flex-row mt-14px justify-between">
                                <span className="font-lato font-medium text-14px leading-20px text-neutral-2">Founder & CEO</span>
                                <div className="flex flex-row">
                                    <a href="#" className="font-lato font-medium leading-20px text-neutral-2 text-14px">View Profile</a>
                                    <img className="ml-8px" src="images/arrow-right.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <img src="images/1.png" className="bg-neutral-5" alt="" />
                            <span className="font-playfair block text-primary-1 font-bold leading-32px text-24px mt-20px">Kristin
                                Watson</span>
                            <div className="flex flex-row mt-14px justify-between">
                                <span className="font-lato font-medium text-14px leading-20px text-neutral-2">Founder & CEO</span>
                                <div className="flex flex-row">
                                    <a href="#" className="font-lato font-medium leading-20px text-neutral-2 text-14px">View Profile</a>
                                    <img className="ml-8px" src="images/arrow-right.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <img src="images/2.png" className="bg-neutral-5" alt="" />
                            <span className="font-playfair block text-primary-1 font-bold leading-32px text-24px mt-20px">Kristin
                                Watson</span>
                            <div className="flex flex-row mt-14px justify-between">
                                <span className="font-lato font-medium text-14px leading-20px text-neutral-2">Founder & CEO</span>
                                <div className="flex flex-row">
                                    <a href="#" className="font-lato font-medium leading-20px text-neutral-2 text-14px">View Profile</a>
                                    <img className="ml-8px" src="images/arrow-right.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <img src="images/3.png" className="bg-neutral-5" alt="" />
                            <span className="font-playfair block text-primary-1 font-bold leading-32px text-24px mt-20px">Kristin
                                Watson</span>
                            <div className="flex flex-row mt-14px justify-between">
                                <span className="font-lato font-medium text-14px leading-20px text-neutral-2">Founder & CEO</span>
                                <div className="flex flex-row">
                                    <a href="#" className="font-lato font-medium leading-20px text-neutral-2 text-14px">View Profile</a>
                                    <img className="ml-8px" src="images/arrow-right.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client */}
            <div className="mt-100px text-center">
                <span className="text-primary-1 font-playfair font-bold text-36px leading-52px ">Clients</span>
                <div className="grid grid-col-2 mt-40px my-slider">
                    <img src="images/clients/image13.png" alt="" />
                    <img src="images/clients/image14.png" alt="" />
                    <img src="images/clients/image15.png" alt="" />
                    <img src="images/clients/image16.png" alt="" />
                    <img src="images/clients/image17.png" alt="" />
                    <img src="images/clients/image18.png" alt="" />
                </div>
            </div>

            {/* Parner */}
            <div className="mt-100px text-center">
                <span className="text-primary-1 font-playfair font-bold text-36px leading-52px ">Partners</span>
                <div className="grid grid-col-2 mt-40px my-slider-2">
                    <img src="images/clients/image13.png" alt="" />
                    <img src="images/clients/image14.png" alt="" />
                    <img src="images/clients/image15.png" alt="" />
                    <img src="images/clients/image16.png" alt="" />
                    <img src="images/clients/image17.png" alt="" />
                    <img src="images/clients/image18.png" alt="" />
                </div>
            </div>

            {/* Contact */}
            <div className="mt-100px pb-100px">
                <div className="container">
                    <div className="shadow-custom flex flex-col-reverse flex-wrap p-60px columns-2 w-full 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse">
                        <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full">
                            <span className="block text-primary-1 mt-32px font-playfair font-bold leading-28px text-18px text-center 2xl:text-left 2xl:text-40px 2xl:leading-60px 2xl:font-bold 2xl:mt-0 xl:text-left xl:text-40px xl:leading-60px xl:font-bold xl:mt-0 lg:text-left lg:text-40px lg:leading-60px lg:font-bold lg:mt-0 md:text-center md:text-18px md:leading-28px md:font-bold md:mt-32px">Our job is to give you the best comfort there is to offer</span>
                            <span className="block text-primary-1 font-lato font-medium leading-24px text-16px mt-24px w-full 2xl:w-70p xl:w-70p lg:w-70p md:w-full">Neque suspendisse at id gravida. Nullam id etiam lacus rhoncus. Libero massa placerat nulla vulputate sed vestibulum et. Feugiat nec in enim, eu dictum nulla sapien augue et.</span>
                            <div className="flex flex-row justify-center 2xl:justify-start xl:justify-start lg:justify-start md:justify-center">
                                <a href='' className="inline-block mt-40px py-8px px-32px font-lato font-medium text-18px leading-28px bg-primary-1 text-neutral-6 text-center cursor-pointer">Download HBH Profile</a>
                            </div>
                        </div>
                        <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full flex flex-row justify-center 2xl:justify-end xl:justify-end lg:justify-end md:justify-center ">
                            <img src="images/Bitmap.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
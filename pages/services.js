/* eslint-disable @next/next/no-img-element */
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';
import React, { useEffect } from 'react';



export default function Services() {

    useEffect(() => {
        // import { tns } from '/node_modules/tiny-slider/src/tiny-slider.js';

        document.addEventListener("DOMContentLoaded", function () {
            var countUp1 = new CountUp('count1', 7, { enableScrollSpy: true });
            countUp1.start();
            var countUp2 = new CountUp('count2', 100, { enableScrollSpy: true });
            countUp2.start();
            var countUp3 = new CountUp('count3', 30, { enableScrollSpy: true });
            countUp3.start();
            var countUp4 = new CountUp('count4', 3, { enableScrollSpy: true });
            countUp4.start();
        });

        var showBtn = document.getElementById('showMore-1');
        var btnText = document.getElementById('showHideText-1');
        var arrow1 = document.getElementById('arrow-1');
        var projectBlock1 = document.getElementById('prj-blck-1');

        var showBtn2 = document.getElementById('showMore-2');
        var btnText2 = document.getElementById('showHideText-2');
        var arrow2 = document.getElementById('arrow-2');
        var projectBlock2 = document.getElementById('prj-blck-2');

        showBtn.onclick = function () {
            if (showBtn.classList.contains('non-active')) {
                btnText.innerText = 'Show less';
                showBtn.classList.remove('non-active');
                showBtn.classList.add('active');
                projectBlock1.classList.add('project-block-animated');
            } else if (showBtn.classList.contains('active')) {
                btnText.innerText = 'Show more';
                showBtn.classList.remove('active');
                showBtn.classList.add('non-active');
                projectBlock1.classList.remove('project-block-animated');
            }
            arrow1.classList.toggle('btn-transition');
        }

        showBtn2.onclick = function () {
            if (showBtn2.classList.contains('non-active')) {
                btnText2.innerText = 'Show less';
                showBtn2.classList.remove('non-active');
                showBtn2.classList.add('active');
                projectBlock2.classList.add('project-block-animated');
            } else if (showBtn2.classList.contains('active')) {
                btnText2.innerText = 'Show more';
                showBtn2.classList.remove('active');
                showBtn2.classList.add('non-active');
                projectBlock2.classList.remove('project-block-animated');
            }
            arrow2.classList.toggle('btn-transition');
        }
    })

    return (
        <div>
            <Head>
                <title>Services</title>
            </Head>

            {/* Header */}
            <Header />

            {/* Service */}
            <div className="container">
                <div className="list-services mt-40px 2xl:mt-100px xl:mt-100px lg:mt-100px md:mt-40px">
                    <div className="flex flex-col columns-1 2xl:flex-row 2xl:columns-2 xl:flex-row xl:columns-2 lg:flex-row lg:columns-2 md:flex-col md:columns-1">
                        <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full">
                            <img src="/images/Rectangle-315.png" alt="" className="w-full" />
                        </div>
                        <div className="flex flex-col w-full ml-0 justify-center 2xl:w-1/2 2xl:ml-40px xl:w-1/2 xl:ml-40px lg:w-1/2 lg:ml-40px md:w-full md:ml-0">
                            <span className="block font-playfair text-60px text-primary-1 font-bold leading-80px mt-30px mb-24px 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-30px">Urban Planning</span>
                            <span className="font-lato leading-28px text-18px font-medium text-neutral-2">Eleifend eget pellentesque a
                                amet scelerisque. Nec viverra molestie et cursus morbi eget.
                                Amet bibendum suspendisse vestibulum
                                amet dignissim in elementum. Vitae, ultrices enim commodo ut pretium feugiat tortor faucibus.
                                <span className="block mt-12px">Vel, nisl, quis nibh eget pretium libero, tortor eleifend sit. Porttitor
                                    nunc, suspendisse non pharetra venenatis eu. Vulputate blandit morbi non mollis. Id pulvinar non
                                    facilisis in at faucibusdonec est.
                                </span>
                                <span className="block mt-12px">Eleifend eget pellentesque a amet scelerisque. Nec viverra molestie et
                                    cursus morbi eget. Ametbibendum suspendisse vestibulum amet dignissim in elementum. Vitae,
                                    ultrices enim commodo ut pretium feugiat tortor faucibus.
                                </span>
                            </span>
                            <div className="flex flex-row cursor-pointer w-fit border-b mt-60px non-active" id="showMore-1">
                                <span className="font-lato text-neutral-2 text-18px leading-28px font-medium mr-1" id="showHideText-1">Show more</span>
                                <img src="/images/down.svg" alt="" id="arrow-1" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-60px project-block" id="prj-blck-1">
                        <span className="block font-playfair leading-52px font-bold text-36px text-primary-1 text-center">Projects</span>
                        <div className="flex flex-row flex-wrap justify-between mt-60px">
                            <div className="w-full flex flex-col 2xl:w-31p xl:w-31p lg:w-31p md:w-full newCtn">
                                <a href="">
                                    <img src="/images/post/Rectangle 70-1.png" alt="" className="w-full" />
                                    <span className="block font-lato font-medium text-16px leading-24px text-neutral-2 mt-24px">Architects <span className="font-medium text-14px leading-20px text-neutral-4">/ July 1, 2022</span></span>
                                    <span className="block font-playfair text-24px leading-32px font-bold text-secondary-2 mt-16px" id="title1">Twin Forestland Home</span>
                                    <span className="block font-lato leading-24px text-16px font-medium text-neutral-2 mt-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tempor incididunt ut labore et dolore magna aliqua. Ut enim mini veniam, quis nostrud.</span>
                                </a>
                            </div>
                            <div className="w-full flex flex-col 2xl:w-31p 2xl:mt-0 xl:w-31p xl:mt-0 lg:w-31p lg:mt-0 md:w-full newCtn md:mt-32px mt-32px">
                                <a href="">
                                    <img src="/images/post/Rectangle 70-1.png" alt="" className="w-full" />
                                    <span className="block font-lato font-medium text-16px leading-24px text-neutral-2 mt-24px">Architects <span className="font-medium text-14px leading-20px text-neutral-4">/ July 1, 2022</span></span>
                                    <span className="block font-playfair text-24px leading-32px font-bold text-secondary-2 mt-16px" id="title2">Twin Forestland Home</span>
                                    <span className="block font-lato leading-24px text-16px font-medium text-neutral-2 mt-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tempor incididunt ut labore et dolore magna aliqua. Ut enim mini veniam, quis nostrud.</span>
                                </a>
                            </div>
                            <div className="w-full flex flex-col 2xl:w-31p 2xl:mt-0 xl:w-31p xl:mt-0 lg:w-31p lg:mt-0 md:w-full newCtn md:mt-32px mt-32px">
                                <a href="">
                                    <img src="/images/post/Rectangle 70-1.png" alt="" className="w-full" />
                                    <span className="block font-lato font-medium text-16px leading-24px text-neutral-2 mt-24px">Architects  <span className="font-medium text-14px leading-20px text-neutral-4">/ July 1, 2022</span></span>
                                    <span className="block font-playfair text-24px leading-32px font-bold text-secondary-2 mt-16px" id="title3">Twin Forestland Home</span>
                                    <span className="block font-lato leading-24px text-16px font-medium text-neutral-2 mt-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tempor incididunt ut labore et dolore magna aliqua. Ut enim mini veniam, quis nostrud.</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-center mt-60px">
                            <a href="" className="flex flex-row">
                                <span className="block font-lato leading-28px text-18px font-medium text-neutral-2 mr-12px">View All Project</span>
                                <img src="/images/arrow-right.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="list-services mt-40px 2xl:mt-100px xl:mt-100px lg:mt-100px md:mt-40px">
                    <div className="flex flex-col-reverse columns-1 2xl:flex-row 2xl:columns-2 xl:flex-row xl:columns-2 lg:flex-row lg:columns-2 md:flex-col-reverse md:columns-1">
                        <div className="flex flex-col w-full ml-0 justify-center 2xl:w-1/2 2xl:ml-40px xl:w-1/2 xl:ml-40px lg:w-1/2 lg:ml-40px md:w-full md:ml-0">
                            <span className="block font-playfair text-60px text-primary-1 font-bold leading-80px mb-24px mt-30px 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-30px">Urban Planning</span>
                            <span className="font-lato leading-28px text-18px font-medium text-neutral-2">Eleifend eget pellentesque a
                                amet scelerisque. Nec viverra molestie et cursus morbi eget. Amet bibendum suspendisse vestibulum
                                amet dignissim in elementum. Vitae, ultrices enim commodo ut pretium feugiat tortor faucibus.
                                <span className="block mt-12px">Vel, nisl, quis nibh eget pretium libero, tortor eleifend sit. Porttitor
                                    nunc, suspendisse non pharetra venenatis eu. Vulputate blandit morbi non mollis. Id pulvinar non
                                    facilisis in at faucibusdonec est.
                                </span>
                                <span className="block mt-12px">Eleifend eget pellentesque a amet scelerisque. Nec viverra molestie et
                                    cursus morbi eget. Ametbibendum suspendisse vestibulum amet dignissim in elementum. Vitae,
                                    ultrices enim commodo ut pretium feugiat tortor faucibus.
                                </span>
                            </span>
                            <div className="flex flex-row cursor-pointer w-fit border-b mt-60px non-active" id="showMore-2">
                                <span className="font-lato text-neutral-2 text-18px leading-28px font-medium mr-1" id="showHideText-2">Show more</span>
                                <img src="/images/down.svg" alt="" id="arrow-2" />
                            </div>
                        </div>
                        <div className="w-full 2xl:w-1/2 2xl:ml-40px xl:w-1/2 xl:ml-40px lg:w-1/2 lg:ml-40px md:w-full md:ml-0 ml-0">
                            <img src="/images/Rectangle-315.png" alt="" className="w-full" />
                        </div>
                    </div>
                    <div className="mt-60px project-block" id="prj-blck-2">
                        <span className="block font-playfair leading-52px font-bold text-36px text-primary-1 text-center">Projects</span>
                        <div className="flex flex-row flex-wrap justify-between mt-60px">
                            <div className="w-full flex flex-col 2xl:w-31p xl:w-31p lg:w-31p md:w-full newCtn">
                                <a href="">
                                    <img src="/images/post/Rectangle 70-1.png" alt="" className="w-full" />
                                    <span className="block font-lato font-medium text-16px leading-24px text-neutral-2 mt-24px">Architects <span className="font-medium text-14px leading-20px text-neutral-4">/ July 1, 2022</span></span>
                                    <span className="block font-playfair text-24px leading-32px font-bold text-secondary-2 mt-16px" id="title1">Twin Forestland Home</span>
                                    <span className="block font-lato leading-24px text-16px font-medium text-neutral-2 mt-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tempor incididunt ut labore et dolore magna aliqua. Ut enim mini veniam, quis nostrud.</span>
                                </a>
                            </div>
                            <div className="w-full flex flex-col 2xl:w-31p 2xl:mt-0 xl:w-31p xl:mt-0 lg:w-31p lg:mt-0 md:w-full newCtn md:mt-32px mt-32px">
                                <a href="">
                                    <img src="/images/post/Rectangle 70-1.png" alt="" className="w-full" />
                                    <span className="block font-lato font-medium text-16px leading-24px text-neutral-2 mt-24px">Architects <span className="font-medium text-14px leading-20px text-neutral-4">/ July 1, 2022</span></span>
                                    <span className="block font-playfair text-24px leading-32px font-bold text-secondary-2 mt-16px" id="title2">Twin Forestland Home</span>
                                    <span className="block font-lato leading-24px text-16px font-medium text-neutral-2 mt-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tempor incididunt ut labore et dolore magna aliqua. Ut enim mini veniam, quis nostrud.</span>
                                </a>
                            </div>
                            <div className="w-full flex flex-col 2xl:w-31p 2xl:mt-0 xl:w-31p xl:mt-0 lg:w-31p lg:mt-0 md:w-full newCtn md:mt-32px mt-32px">
                                <a href="">
                                    <img src="/images/post/Rectangle 70-1.png" alt="" className="w-full" />
                                    <span className="block font-lato font-medium text-16px leading-24px text-neutral-2 mt-24px">Architects  <span className="font-medium text-14px leading-20px text-neutral-4">/ July 1, 2022</span></span>
                                    <span className="block font-playfair text-24px leading-32px font-bold text-secondary-2 mt-16px" id="title3">Twin Forestland Home</span>
                                    <span className="block font-lato leading-24px text-16px font-medium text-neutral-2 mt-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tempor incididunt ut labore et dolore magna aliqua. Ut enim mini veniam, quis nostrud.</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-center mt-60px">
                            <a href="" className="flex flex-row">
                                <span className="block font-lato leading-28px text-18px font-medium text-neutral-2 mr-12px">View All Project</span>
                                <img src="/images/arrow-right.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

        </div>
    )
}
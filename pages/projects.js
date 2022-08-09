/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';
import React, { useEffect } from 'react';
import $ from 'jquery'
import { Select2 } from 'select2';

export default function Home() {

    useEffect(() => {


        $(document).ready(function () {
            $('.select-type').select2();
        });
    })

    return (
        <div>

            <Head>
                <title>Projects</title>
            </Head>

            {/* Header */}
            <Header />

            {/* Project filter */}
            <div className="bg-projects bg-no-repeat bg-cover">
                <div className="container">
                    <span className="block font-playfair font-bold text-60px leading-80px text-neutral-6 text-center pt-40px">Projects</span>
                    <div className="flex flex-row flex-wrap columns-1 justify-between pb-60px mt-40px 2xl:columns-4 xl:columns-4 lg:columns-4 md:columns-1">
                        <div className="flex flex-col font-lato w-full 2xl:w-1/5 xl:w-1/5 lg:w-1/4 md:w-full">
                            <span className="block mb-20px text-18px text-neutral-6 leading-28px font-medium">Type</span>
                            <select className="select-type">
                                <option value="">Show All</option>
                                <option value="">Architecture</option>
                                <option value="">Landscape</option>
                            </select>
                        </div>
                        <div className="flex flex-col font-lato w-full mt-20px 2xl:w-1/5 2xl:m-0 xl:w-1/5 xl:m-0 lg:w-1/4 lg:m-0 md:w-full md:mt-20px">
                            <span className="block mb-20px text-18px text-neutral-6 leading-28px font-medium">Type</span>
                            <select className="select-type">
                                <option value="">Show All</option>
                                <option value="">Architecture</option>
                                <option value="">Landscape</option>
                            </select>
                        </div>
                        <div className="flex flex-col font-lato w-full mt-20px 2xl:w-1/5 2xl:m-0 xl:w-1/5 xl:m-0 lg:w-1/4 lg:m-0 md:w-full md:mt-20px">
                            <span className="block mb-20px text-18px text-neutral-6 leading-28px font-medium">Type</span>
                            <select className="select-type">
                                <option value="">Show All</option>
                                <option value="">Architecture</option>
                                <option value="">Landscape</option>
                            </select>
                        </div>
                        <div className="flex flex-col font-lato w-full mt-20px 2xl:w-1/5 2xl:m-0 xl:w-1/5 xl:m-0 lg:w-1/4 lg:m-0 md:w-full md:mt-20px">
                            <span className="block mb-20px text-18px text-neutral-6 leading-28px font-medium">Type</span>
                            <select className="select-type">
                                <option value="">Show All</option>
                                <option value="">Architecture</option>
                                <option value="">Landscape</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project list */}
            <div className="mt-100px mb-120px">
                <div className="container">
                    <div className="grid grid-layout">
                        <div className="flex flex-col">
                            <a href="#">
                                <img src="images/projects/1.png" alt="" />
                                <span className="block font-playfair text-24px leading-32px text-primary-1 font-bold mt-24px">Geometric House</span>
                                <span className="block font-lato leading-24px text-20px font-medium mt-12px font">Residential / USA</span></a>
                        </div>
                        <div className="flex flex-col">
                            <a href="#">
                                <img src="images/projects/2.png" alt="" />
                                <span className="block font-playfair text-24px leading-32px text-primary-1 font-bold mt-24px">Geometric House</span>
                                <span className="block font-lato leading-24px text-20px font-medium mt-12px font">Residential / USA</span></a>
                        </div>
                        <div className="flex flex-col">
                            <a href="#">
                                <img src="images/projects/3.png" alt="" />
                                <span className="block font-playfair text-24px leading-32px text-primary-1 font-bold mt-24px">Geometric House</span>
                                <span className="block font-lato leading-24px text-20px font-medium mt-12px font">Residential / USA</span></a>
                        </div>
                        <div className="flex flex-col">
                            <a href="#">
                                <img src="images/projects/4.png" alt="" />
                                <span className="block font-playfair text-24px leading-32px text-primary-1 font-bold mt-24px">Geometric House</span>
                                <span className="block font-lato leading-24px text-20px font-medium mt-12px font">Residential / USA</span></a>
                        </div>
                        <div className="flex flex-col">
                            <a href="#">
                                <img src="images/projects/5.png" alt="" />
                                <span className="block font-playfair text-24px leading-32px text-primary-1 font-bold mt-24px">Geometric House</span>
                                <span className="block font-lato leading-24px text-20px font-medium mt-12px font">Residential / USA</span></a>
                        </div>
                        <div className="flex flex-col">
                            <a href="#">
                                <img src="images/projects/6.png" alt="" />
                                <span className="block font-playfair text-24px leading-32px text-primary-1 font-bold mt-24px">Geometric House</span>
                                <span className="block font-lato leading-24px text-20px font-medium mt-12px font">Residential / USA</span></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

        </div>
    )
}
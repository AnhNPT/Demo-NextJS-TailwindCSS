/* eslint-disable @next/next/no-img-element */
export default function footer() {
    return (
        <div className="bg-neutral-1 mt-120">
            <div className="container">
                <div className="flex flex-row flex-wrap columns-3 pt-40px pb-40px ">
                    <div className="flex flex-col w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/3">
                        <img src='/images/Logo.svg' className="w-140px" alt="" />
                        <div className="flex flex-row mt-38px">
                            <a className="mr-16px" href="#">
                                <img src='/images/Social Icons-1.svg' alt="" />
                            </a>
                            <a className="mr-16px" href="#">
                                <img src='/images/Social Icons-2.svg' alt="" />
                            </a>
                            <a className="mr-16px" href="#">
                                <img src='/images/Social Icons-2.svg' alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mt-26px 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/3 md:mt-26px">
                        <span
                            className="block font-playfair font-medium text-20px leading-24px text-neutral-6 w-fit border-b">Contact</span>
                        <span
                            className="block font-lato font-medium text-16px leading-24px text-neutral-6 mt-24px">+842473076655</span>
                        <span
                            className="block font-lato font-medium text-16px leading-24px text-neutral-6 mt-12px">office@hbharchitects.com</span>
                    </div>
                    <div className="flex flex-col w-full mt-26px 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/3 md:mt-26px">
                        <span
                            className="block font-playfair font-medium text-20px leading-24px text-neutral-6 w-fit border-b">Address</span>
                        <span className="block font-lato font-medium text-16px leading-24px text-neutral-6 mt-24px">8th Floor.
                            Block C- Central Point Building</span>
                        <span className="block font-lato font-medium text-16px leading-24px text-neutral-6 mt-12px">219 Trung
                            Kinh, Cau Giay, Ha Noi</span>
                    </div>
                    <span className="block mt-24px font-lato font-normal text-14px leading-24px text-neutral-5">Copyright © 2022
                        HBH Architects & Partners. All rights reserved</span>
                </div>
            </div>
        </div>
    )
}
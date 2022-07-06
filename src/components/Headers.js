import React from 'react';

const Headers = () => {
    return (
        <div className="container max-w-6xl mx-auto px-6 py-12 bg-amber-400	 ">
            <img src="../assets/campfire-1279785_1920.jpg" alt=""/>
            <nav
                className="flex items-center justify-between font-bold text-red-500 bg-[url('/assets/campfire-1279785_1920.jpg')]">
                <i className="fa-brands fa-pied-piper-alt text-3xl"></i>
                <div className="hidden h-10 font-alata md:flex md:space-x-8">
                    <div className="group">
                        <a href="#">Home</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div className="group">
                        <a href="#">Check weather</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div className="group">
                        <a href="#">Contact</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                </div>

            </nav>
            <div
                className="max-w-lg mt-20 p-4 font-sans text-2xl text-blue-600 uppercase border-2 md:p-10 md:mx-0 md:text-4xl">
                check the wheather and get going
            </div>


        </div>


    );
};

export default Headers;
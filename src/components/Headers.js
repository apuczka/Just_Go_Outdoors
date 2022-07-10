import React from 'react';
import Hamburgers from './Hamburger';
import logo from '../assets/logo.png';
import background from '../assets/background.jpg';
import Button from "./Button";
import rainGif from '../assets/rain.gif'

const backgroundImage = {
    backgroundImage: "url(" + background + ")",
};



const Headers = () => {
    return (
        <div className="container max-w-6xl mx-auto px-6 py-12">
            {/*<img src={campfire} alt="" height={200} width={200}/>*/}
            <nav className="flex items-center justify-between text-[grey]">
                <div className="hidden h-10 font-sarif md:flex md:space-x-8 text-xl">
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
                <img className="rounded-full mr-12" src={logo} alt="logo" height={150} width={150}/>
                <div className="md:hidden">
                    <Hamburgers className="z-40 block hamburger md:hidden focus:outline-none">

                    </Hamburgers>
                </div>

            </nav>
            {/*//TODO mobile menu HAMBURGER*/}

            <div
                className="absolute top-0 bottom-0 left-0 hidden flex flex-col self-end w-full h-1/2 py-1 pt-40 pl-12 space-y-3 text-lg text-white bg-black">
                <a href="#" className="hover:text-green-600">Home</a>
                <a href="#" className="hover:text-green-600">Check weather</a>
                <a href="#" className="hover:text-green-600">Contact</a>
            </div>

            <img src={rainGif} alt="" width={200} height={200}/>
            <div
                className="max-w-lg p-4 font-sans text-2xl text-[lightblue] mt-6 md:p-10 md:mx-0 md:text-4xl">
                CHECK THE WEATHER AND GET GOING
                <div className="text-xl text-[grey]">Zaplanuj wycieczkę w góry, sprawdź pogodę i w drogę</div>

                <Button />
            </div>



        </div>


    );
};

export default Headers;
import React from 'react';
import logo from '../assets/logo.png';
import Button from "./Button";
import rainGif from '../assets/rain.gif'
import Sidebar from "./Sidebar";
import WeatherApp from './WeatherApp';



const Headers = ( {weatherData}) => {


    return (
        <div className="container max-w-6xl mx-auto px-6 py-12 shadow-xl">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>

            <nav id='page-wrap' className="flex items-center justify-between text-[grey]">
                <img className="rounded-full mr-6 ml-11" src={logo} alt="logo" height={100} width={100}/>
                <div className="hidden h-10 font-alata md:flex md:space-x-8 text-xl mr-11">
                    <div className="group">
                        <a href="#">Home</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div className="group">
                        <a href="#form-weather">Check the weather</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div className="group">
                        <a href="#contact">Contact</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                </div>
            </nav>



            <div
                className="p-4 font-sans text-2xl text-[lightblue] mt-6 md:p-10 md:mx-0 md:text-4xl flex flex-col-reverse items-center md:flex-row justify-between">
                <div className="flex flex-col">
                    CHECK THE WEATHER AND GET GOING
                    <div className="text-xl text-[grey]">Plan a trip to the mountains, check the weather and hit the road</div>

                    <Button text="Go"/>
                </div>
                {/*<img src={`icons/${weatherData.daily[0].weather[0].icon}.png`} alt="weather-icon" height={200} width={200}/>*/}
                <img src={rainGif} alt="" width={200} height={200}/>
            </div>


        </div>


    );
};

export default Headers;
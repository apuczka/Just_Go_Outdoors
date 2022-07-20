import React from 'react';
import temperature from '../assets/temperature.png';
import wind from '../assets/wind.png';
import real from '../assets/real.png';
import {useState} from "react";



const WeatherApp = ({weatherData}) => {
    const [city, setCity] = useState('Bielsko-Biała');

    return (
        <div
            className="relative container flex flex-col items-center max-w-6xl mx-auto my-5 px-6 text-gray-900 justify-center">
            <div className="flex flex-col items-center text-2xl">
                {city}
                <table className="max-w-lg mt-10 mb-6 font-sans text-xl text-center text-darkblue ">
                    <thead>
                    <tr>
                        <th className="p-2 pl-4"> {new Date().toLocaleDateString()} </th>
                        <th className="p-2 pl-14">Day</th>
                        <th className="p-2 pl-14">Night</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <th className="p-2 pl-14"><img src={temperature} alt="thermometer" height={25} width={25}/></th>
                        <td className="p-2 pl-14">{ Math.round(`${weatherData.daily[0].temp.day}`)}°C</td>
                        <td className="p-2 pl-14">{Math.round(`${weatherData.daily[0].temp.night}`)}°C</td>


                    </tr>
                    <tr>
                        <th className="p-2 pl-14"><img src={real} alt="thermometer" height={25} width={25}/></th>
                        <td className="p-2 pl-14">{Math.round(`${weatherData.daily[0].feels_like.day}`)}°C
                        </td>
                        <td className="p-2 pl-14">{Math.round(`${weatherData.daily[0].feels_like.night}`)}°C</td>
                    </tr>
                    <tr>
                        <th className="p-2 pl-12"><img src={`icons/${weatherData.daily[0].weather[0].icon}.png`} alt="weather-icon" height={40} width={40}/></th>
                        <td colSpan="2" className="p-2 pl-14">{weatherData.daily[0].weather[0].description}</td>
                    </tr>
                    <tr>
                        <th className="p-2 pl-14"><img src={wind} alt="wind" height={25} width={25}/></th>
                        <td colSpan="2" className="p-2 pl-14">{weatherData.daily[0].wind_speed} m/s</td>
                    </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default WeatherApp;

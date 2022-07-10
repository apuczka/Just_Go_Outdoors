import React from 'react';
import Button from "./Button";
import temperature from '../assets/temperature.png';
import rain from '../assets/rain.png';
import wind from '../assets/wind.png';
import real from '../assets/real.png';

const Weather = () => {

    return (
        <div className="relative container flex flex-col items-center max-w-6xl mx-auto my-5 px-6 text-gray-900 justify-center">
            <div className="flex flex-col items-center text-2xl">
                Nazwa lokalizacji
                <table className="max-w-lg mt-10 mb-6 font-sans text-xl text-center text-darkblue ">
                <thead>
                <tr>
                    <th className="p-2 pl-4">20.07.2022</th>
                    <th className="p-2 pl-14">Day</th>
                    <th className="p-2 pl-14">Night</th>
                </tr>
                </thead>
                <tbody>
                    <tr>

                        <th className="p-2 pl-14"><img src={temperature} alt="thermometer" height={25} width={25}/></th><td
                        className="p-2 pl-14">20°C</td><td className="p-2 pl-14">15°C</td>
                    </tr>
                    <tr>
                        <th className="p-2 pl-14"><img src={real} alt="thermometer" height={25} width={25}/></th><td
                        className="p-2 pl-14">24°C</td><td className="p-2 pl-14">15°C</td>
                    </tr>
                    <tr>
                        <th className="p-2 pl-14"><img src={rain} alt="rain" height={25} width={25}/></th><td
                        className="p-2 pl-14">-</td><td className="p-2 pl-14">2-5mm</td>
                    </tr>
                    <tr>
                        <th className="p-2 pl-14"><img src={wind} alt="wind" height={25} width={25}/></th><td
                        className="p-2 pl-14">9-12 km/h</td><td className="p-2 pl-14">9km/h</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="hidden">
                Nazwa lokalizacji
                <table className="max-w-lg mt-10 mb-6 font-sans text-xl text-center text-darkblue ">
                <thead>
                <tr>
                    <th className="p-2 pl-14">20.07.2022</th>
                    <th className="p-2 pl-14">Day</th>
                    <th className="p-2 pl-14">Night</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                    <th className="p-2 pl-14"><img src={temperature} alt="thermometer" height={25} width={25}/></th><td className="p-2 pl-14">20°C</td><td className="p-2 pl-14">15°C</td>
                </tr>
                <tr>
                    <th className="p-2 pl-14"><img src={real} alt="thermometer" height={25} width={25}/></th><td className="p-2 pl-14">24°C</td><td className="p-2 pl-14">15°C</td>
                </tr>
                <tr>
                    <th className="p-2 pl-14"><img src={rain} alt="rain" height={25} width={25}/></th><td className="p-2 pl-14">-</td><td className="p-2 pl-14">2-5mm</td>
                </tr>
                <tr>
                    <th className="p-2 pl-14"><img src={wind} alt="wind" height={25} width={25}/></th><td className="p-2 pl-14">9-12 km/h</td><td className="p-2 pl-14">9km/h</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Weather;
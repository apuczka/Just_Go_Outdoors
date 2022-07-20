import React from "react-dom";
import ReactDOM from "react-dom";
import {useEffect, useState} from "react";
import WeatherApp from './WeatherApp';

// import React from 'react';
import Button from "./Button";



// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// const URL = 'https://api.open-meteo.com/v1/forecast?latitude=49.82&longitude=19.04&hourly=temperature_2m'
//TEMP MAX
// const URL = "https://api.open-meteo.com/v1/forecast?latitude=49.82&longitude=19.04&daily=temperature_2m_max,temperature_2m_min,rain_sum,windspeed_10m_max&timezone=Europe%2FBerlin"

// const BielskoBiala = {
//     lat: 49.82,
//     lon: 19.04
// };
//
// const URL_Soblowka = {
//     name: "Soblówka",
//     lat: 49.4356,
//     lon: 19.1431,
//     asl: 666
// }
// const URL_Rajcza =  {
//     name: "Rajcza",
//     lat: 49.5093,
//     lon: 19.1128,
//     asl: 491
// }
// const URL_Ustron = {
//     name: "Ustroń",
//     lat: 49.7215,
//     lon: 18.802,
//     asl: 355
// }

export default function Weather() {
    const [weathers, setWeathers] = useState([]);
    const [lat, setLat] = useState([49.7215]);
    const [long, setLong] = useState([18.802]);

    // const tempDay = weathers.daily.temperature_2m_max[0];
    // const tempNight = weathers.daily.temperature_2m_min[0];
    // const dailyRain = weathers.daily.rain_sum[0];
    // const dailyWind = weathers.daily.windspeed_10m_max[0]
    //
    // console.log(weathers)


    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            console.log({lat})
            console.log({long})
            await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then((response) => response.json())

                .then((result) => {
                    setWeathers(result)
                    console.log(result);
                })

            // .catch((err) => console.error(err));
        }
        fetchData();
    }, [lat, long]);


    return (

        <div>
            {(typeof weathers.daily != 'undefined') ? (
                <WeatherApp weatherData={weathers}/>
            ) : (
                <div></div>
            )}
        </div>)

    //
    //         {/*NEXT DATE*/}
    //         <div className="hidden">
    //             Nazwa lokalizacji
    //             <table className="max-w-lg mt-10 mb-6 font-sans text-xl text-center text-darkblue ">
    //             <thead>
    //             <tr>
    //                 <th className="p-2 pl-14">20.07.2022</th>
    //                 <th className="p-2 pl-14">Day</th>
    //                 <th className="p-2 pl-14">Night</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             <tr>
    //
    //                 <th className="p-2 pl-14"><img src={temperature} alt="thermometer" height={25} width={25}/></th><td className="p-2 pl-14">20°C</td><td className="p-2 pl-14">15°C</td>
    //             </tr>
    //             <tr>
    //                 <th className="p-2 pl-14"><img src={real} alt="thermometer" height={25} width={25}/></th><td className="p-2 pl-14">24°C</td><td className="p-2 pl-14">15°C</td>
    //             </tr>
    //             <tr>
    //                 <th className="p-2 pl-14"><img src={rain} alt="rain" height={25} width={25}/></th><td className="p-2 pl-14">-</td><td className="p-2 pl-14">2-5mm</td>
    //             </tr>
    //             <tr>
    //                 <th className="p-2 pl-14"><img src={wind} alt="wind" height={25} width={25}/></th><td className="p-2 pl-14">9-12 km/h</td><td className="p-2 pl-14">9km/h</td>
    //             </tr>
    //             </tbody>
    //         </table>
    //         </div>
    //     </div>

};


import React, { useState, useEffect } from 'react';
import Button from './Button';
import dataCities from "../assets/dataCities"


const Form = ({watchCity}) => {

    const [weather, setWeather] = useState(null);

    const [city, setCity] = useState(["Bielsko-Biała"]);
    const changeCityHandler = (e) => {
        e.preventDefault();

        setCity(e.target.value);


    }
    useEffect(() => {
        watchCity(city);
    }, [city])

    return (
        <label id="form-weather" className="relative container flex flex-col items-center max-w-6xl mx-auto my-5 px-6 text-gray-900">
            <span className="max-w-lg mt-10 mb-6 font-sans text-xl text-center text-[darkblue] ">

                Where do you want to go:
            </span>

            <select onChange={changeCityHandler} value={city} className="px-14 py-3 rounded-full border-2 ">
                {dataCities.map((c) => (
                    <option key={c.lat}>{c.name}</option>
                ))}

            </select>

            {/*<span className="max-w-lg mt-10 mb-6 font-sans text-xl text-center text-[darkblue] ">When do you want to go:</span>*/}


            {/*<input type="date" className="px-8 py-3 rounded-full border-2 "/>*/}
        </label>
    );
};

export default Form;
import React, { useState, useEffect } from 'react';
import Button from './Button';

const URL = `http://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=f0b633cf571f1e53be74bf57ac4f25e6`
// const API_KEY = process.env.REACT_APP_API_KEY;

const Form = () => {

    const [weather, setWeather] = useState(null);
    // const [city, setCity] = useState("Londyn");

    useEffect(() => {
        fetch(`${URL}`)
            .then((response) => response.json())
            .then((weatherData) => {
                setWeather(weatherData);
            })
            .catch((err) => console.error(err));
    }, []);

    // const changeCityHandler = (e) => {
    //     setCity(e.target.value);
    // };


    return (
        <label id="form-weather" className="relative container flex flex-col items-center max-w-6xl mx-auto my-5 px-6 text-gray-900">
            <span className="max-w-lg mt-10 mb-6 font-sans text-xl text-center text-[darkblue] ">
                Where do you want to go:
            </span>
            <select /*onChange={changeCityHandler} value={city}*/ className="px-14 py-3 rounded-full border-2 ">
                <option>Rajcza</option>
                <option>Ustroń</option>
                <option>Soblówka</option>
                <option></option>

            </select>
            <span className="max-w-lg mt-10 mb-6 font-sans text-xl text-center text-[darkblue] ">When do you want to go:</span>
            <input type="date" className="px-8 py-3 rounded-full border-2 "/>
            <Button />
            <Button>
                //TODO Next day
            </Button>
        </label>
    );
};

export default Form;
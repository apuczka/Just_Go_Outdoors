import React from 'react';
import Form from './Form';
import Weather from "./Weather";
import {useState} from "react";
import dataCities from "../assets/dataCities";


const Section = () => {
    const [city, setCity] = useState('Bielsko-Biała');
    const setWatchCity = (value) => {
        setCity(value)
    }


    return (
        <section id="section" className="container max-w-6xl mx-auto flex flex-col md:flex-row px-6 py-12 shadow-xl ">

            <Form watchCity={setWatchCity} selectCity={dataCities}/>
            <Weather city={city}/>
        </section>
    );
};

export default Section;

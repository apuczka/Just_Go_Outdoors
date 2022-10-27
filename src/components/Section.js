import React from 'react';
import Form from './Form';
import Weather from "./Weather";
import { useState } from "react";
import dataCities from "../assets/dataCities";
import Button from "./Button";


const Section = () => {
    const [city, setCity] = useState('Bielsko-Biała');
    const [visible, setVisible] = useState(false)
    const setWatchCity = (value) => {
        setCity(value)
    }


    return (
        <section id="section" className="container max-w-6xl mx-auto flex flex-col md:flex-row px-6 py-12 shadow-xl ">
            <Button onClick={() => setVisible(!visible)} >nacisnij mnie </Button>
            <Form watchCity={setWatchCity} selectCity={dataCities}/>
            {visible && <div>Hello</div>}
            <Weather city={city}/>
        </section>
    );
};

export default Section;


// const [visible, setVisible] = React.useState(false);
// return (
//     <div>
//         <button onClick={() => setVisible(!visible)}>
//             {visible ? 'Ukryj' : 'Wyświetl'}
//         </button>
//         {visible && <div>Mój element</div>}
//     </div>
// );

import React, {Component} from "react";
import './App.css';

import Headers from "./components/Headers";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


// const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=74630a06589374cbf88419b9a6e12b2f`

// const URL = 'https://my.meteoblue.com/packages/basic-1h_basic-day?apikey=Nn7yFqWxHu50SLaG&lat=49.8224&lon=19.0469&asl=330&format=json&tz=Europe%2FWarsaw'

function App() {

    return (

        <div>

            <Headers id='page-wrap'/>

            <Section/>
            <Contact/>
            <Footer/>
        </div>

    );

}

export default App;

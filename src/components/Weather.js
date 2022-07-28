import React from "react-dom";
import { useEffect, useState } from "react";
import WeatherApp from './WeatherApp';
import Form from "./Form";
import dataCities from "../assets/dataCities";
import Button from "./Button";


export default function Weather({city}) {
    const [weathers, setWeathers] = useState([]);
    const [lat, setLat] = useState([dataCities[0].lat]);
    const [long, setLong] = useState([dataCities[0].long]);
    // const [open, setOpen] = useState(false);

    // let reqLat;
    // let reqLong;
    // for(const c of dataCities) {
    //     if(c.name === city) {
    //         reqLat = c.lat
    //         reqLong = c.long
    //     }
    // }
    // console.log(reqLong)
    // console.log(reqLat)


    useEffect(() => {



        const fetchData = async () => {


            await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then((response) => response.json())
                .then((result) => {
                    setWeathers(result)
                    setLong({
                        long: dataCities[1].long})
                    setLat({
                        lat: dataCities[1].lat
                    })
                    console.log(result);
                })


            .catch((err) => console.error(err));
        }
        fetchData();
    }, []);


    return (

        <div>
            <h2 className="mt-10 text-3xl text-[darkblue] flex content-around justify-center">{city}</h2>
            {(typeof weathers.daily != 'undefined') ? (
                <WeatherApp weatherData={weathers}/>
            ) : (
                <div></div>
            )}
            {/*<Button text="Next day" onClick={() => {*/}
            {/*    setOpen(!open);*/}
            {/*}} />*/}

        </div>)


};


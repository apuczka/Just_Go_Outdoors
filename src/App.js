import './App.css';
import Headers from "./components/Headers";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";


const URL = `http://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=f0b633cf571f1e53be74bf57ac4f25e6`



function App() {
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
  return (

      <div>

          <Headers id='page-wrap'/>

          <Section />
          <Contact />
          <Footer />
      </div>

  );
}

export default App;

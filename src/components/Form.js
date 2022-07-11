import React from 'react';
import Button from './Button';


const Form = () => {
    return (
        <label id="form-weather" className="relative container flex flex-col items-center max-w-6xl mx-auto my-5 px-6 text-gray-900">
            <span className="max-w-lg mt-10 mb-6 font-sans text-xl text-center text-[darkblue] ">
                Where do you want to go:
            </span>
            <select className="px-14 py-3 rounded-full border-2 ">
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
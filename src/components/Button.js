import {useState} from "react";


const Button = ({text}) => {



    return (

        <button type='submit' className="px-20 py-3 rounded-full border-2 mt-9 bg-sky-900 text-sky-100 text-3xl">
            {text}
        </button>
    );
};

export default Button;


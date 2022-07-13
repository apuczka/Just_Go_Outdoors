import React, { useContext }from 'react';
import {slide as Menu} from 'react-burger-menu'
// const MyContext = React.createContext();


const Button = () => {
    // const ctx = useContext(MyContext)
    return (
    //
    //     <button onClick={ctx.toggleMenu}>Toggle menu</button>
        <button type='submit' className="px-20 py-3 rounded-full border-2 mt-9 bg-sky-900 text-sky-100 text-3xl">
            Go
        </button>
    );
};

export default Button;


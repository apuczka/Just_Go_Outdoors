import React, {useState} from 'react';
import Hamburger from 'hamburger-react';


const Hamburgers = () => {

    const [isOpen, setOpen] = useState(false)
    const handleClick = (event) => {
        setOpen(prevState => true)
        console.log('hello')
    }

    return (
        <button onClick={event => handleClick(event)}> Click </button>

    );
};

export default Hamburgers;
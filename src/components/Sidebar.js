import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../Sidebar.css';


const Sidebar = () => {
    return (
        <Menu >
            <a href="#" className="menu-item">Home</a>
            <a href="#form-weather" className="menu-item">Check the weather</a>
            <a href="#contact" className="menu-item">Contact</a>


        </Menu>
    );
};

export default Sidebar;
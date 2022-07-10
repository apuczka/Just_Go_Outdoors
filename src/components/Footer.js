import React from 'react';
import backgroundFooter from '../assets/footer.jpg';


const backgroundImage = {
    backgroundImage: "url(" + backgroundFooter + ")",
};


const Footer = () => {


    return (

            <div className="container max-w-6xl mx-auto px-6 py-12 bg-cover" style={backgroundImage}>


            </div>
    );
};

export default Footer;
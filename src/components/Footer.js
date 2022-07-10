import React from 'react';
import backgroundFooter from '../assets/footer.jpg';


const backgroundImage = {
    backgroundImage: "url(" + backgroundFooter + ")",
};


const Footer = () => {


    return (

            <div className="container max-w-6xl mx-auto px-6 py-12 flex justify-between" >
                <div>Copyright JustGoOutdoors.pl</div>
                <div>
                    <i className="fa-brands fa-facebook-square m-0.5"></i>
                    <i className="fa-brands fa-instagram m-0.5"></i>
                    <i className="fa-brands fa-twitter-square m-0.5"></i>
                </div>

            </div>
    );
};

export default Footer;
import React from 'react';
import Button from "./Button";
import mailbox from '../assets/mailbox.png';

const Contact = () => {
    return (
        <div id='contact' className="container max-w-6xl mx-auto px-6 py-12 shadow-xl">
            <div className="w-2/3 m-auto p-8 ">
                <h1 className="text-4xl font-bold flex items-center">
                    <img src={mailbox} width={100} height={100} className="pr-5" />
                    <span>Contact Us</span>
                </h1>
                <form action="" className="flex flex-col">
                    <div className="my-2 flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="border-2 p-2"/>
                        <label htmlFor="email">Email</label>
                        <input type="email" className="border-2 p-2" />
                    </div>
                    <div className="my-2 flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea className="border-2 p-2" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <Button />
                </form>
            </div>


        </div>

    );
};

export default Contact;
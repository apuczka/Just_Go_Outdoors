import React, {useState} from 'react';
import Button from "./Button";
import mailbox from '../assets/mailbox.png';

const Contact = () => {
const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState()
    const handleSubmit = (e) => {
        alert(name + " Twoja wiadomość została wysłana")
        e.preventDefault();
        setName("")
        setEmail("")
        setMessage("")

    }

    return (
        <div id='contact' className="hidden container max-w-6xl mx-auto px-6 py-12 shadow-xl">
            <div className="w-2/3 m-auto p-8 ">
                <h1 className="text-4xl font-bold flex items-center">
                    <img src={mailbox} width={100} height={100} className="pr-5" />
                    <span>Contact Us</span>
                </h1>
                <form onSubmit={handleSubmit}  action="" className="flex flex-col">
                    <div className="my-2 flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={(event) => setName(event.target.value)}type="text" className="border-2 p-2"/>
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(event) => setEmail(event.target.value)}type="email" className="border-2 p-2" />
                    </div>
                    <div className="my-2 flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea value={message} onChange={(event) => setMessage(event.target.value)}className="border-2 p-2" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <Button text={"Send"} />
                </form>
            </div>


        </div>

    );
};

export default Contact;
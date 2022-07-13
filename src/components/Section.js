import React from 'react';
import Form from './Form';
import Weather from "./Weather";


const Section = () => {
    return (
        <section className="container max-w-6xl mx-auto flex flex-col md:flex-row px-6 py-12 shadow-xl ">
            <Form />
            <Weather />
        </section>
    );
};

export default Section;
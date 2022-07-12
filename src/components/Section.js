import React from 'react';
import Form from './Form';
import Weather from "./Weather";


const Section = () => {
    return (
        <section className="container max-w-6xl mx-auto px-6 py-12 shadow-xl md-flex">
            <Form />
            <Weather />
        </section>
    );
};

export default Section;
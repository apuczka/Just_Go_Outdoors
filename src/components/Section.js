import React from 'react';
import Form from './Form';
import Weather from "./Weather";


const Section = () => {
    return (
        <section className="md:flex">
            <Form />
            <Weather />
        </section>
    );
};

export default Section;
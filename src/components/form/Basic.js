import './basic.scss';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => {
    return (
        <form className="form">
            <h2>Write to me</h2>
            <label htmlFor="name">Your name</label>
            <input
                id="name"
                name="name"
                type="text"
            />
            <label htmlFor="email">Your mail</label>
            <input
                id="email"
                name="email"
                type="email"
            />
            <label htmlFor="text">Your message</label>
            <textarea
                id="text"
                name="text"
            />
            <label className="checkbox">
                <input name="terms" type="checkbox" />
                Do you agree with the privacy policy?
            </label>
            <button type="submit">Send</button>
        </form>
    )
}

export default Basic;
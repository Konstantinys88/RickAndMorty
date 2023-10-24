import './basic.scss';

// import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Basic = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            text: '',
            terms: false,
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2, 'Enter at least 2 characters').required('Required field'),
            email: Yup.string().email('Incorrect email addressf').required('Required field'),
            terms: Yup.boolean().required('Consent is required').oneOf([true], 'Consent is required'),
        }),
        onSubmit: values => {
            let res = JSON.stringify(values, null, 2);
            console.log(res);
        
            // console.log('Form data', values);
            // fetch('bd.json', {
            //     method: 'post',
            //     headers: {
            //         'Accept': 'application/json, text/plain, */*',
            //         'Content-Type': 'application/json'
            //     },
            //     body:  JSON.stringify(values)
            // })

        }
    });


    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Write to me</h2>
            <label htmlFor="name">Your name</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
            <label htmlFor="email">Your mail</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
            <label htmlFor="text">Your message</label>
            <textarea
                id="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <label className="checkbox">
                <input
                    name="terms"
                    type="checkbox"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                Do you agree with the privacy policy?
            </label>
            {formik.errors.terms && formik.touched.terms ? <div className='error'>{formik.errors.terms}</div> : null}
            <button type="submit">Send</button>
        </form>
    )
}

export default Basic;
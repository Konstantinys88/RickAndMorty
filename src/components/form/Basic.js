
import './basic.scss';

import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field} />
            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
        </>
    )
}

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <label className="checkbox">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </>
    );
};


const Basic = () => {

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                text: '',
                terms: false,
            }}

            validationSchema={Yup.object({
                name: Yup.string().min(2, 'Enter at least 2 characters').required('Required field'),
                email: Yup.string().email('Incorrect email addressf').required('Required field'),
                terms: Yup.boolean().required('Consent is required').oneOf([true], 'Consent is required'),
            })}

            onSubmit={(values, { resetForm }) => {

                // let res = JSON.stringify(values, null, 2);
                // console.log(res);
                // console.log('Form data', values);

                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        values
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));

                resetForm();
            }
            }
        >
            <Form className="form" >
                <h2>Write to me (The form simulates sending data to the jsonplaceholder service)</h2>
                <MyTextInput
                    label={'Your name'}
                    id="name"
                    name="name"
                    type="text"
                />
                <MyTextInput
                    label={'Your mail'}
                    id="email"
                    name="email"
                    type="email"
                />
                <label htmlFor="text">Your message</label>
                <Field
                    id="text"
                    name="text"
                    as="textarea"
                />
                <MyCheckbox name="terms">
                    Do you agree with the privacy policy?
                </MyCheckbox>

                <button type="submit">Send</button>
            </Form>
        </Formik >
    )
}

export default Basic;
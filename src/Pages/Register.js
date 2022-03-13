import { Formik, Form } from 'formik'
import TextField from '../Components/TextField'
import * as Yup from 'yup'
import "./Register.css"
import FormikControl from '../Components/FormikControl'

function Register() {

    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Latvia', value: 'latvia' },
        { key: 'Estonia', value: 'estonia' },
        { key: 'Lithuania', value: 'lithuania' },
    ]

    const checkboxOptions =
        { key: 'Agree with the Terms and Conditions*', value: 'opt1' }

    const validate = Yup.object({
        username: Yup.string()
            .min(5, 'Lenght of input should be at least 5 characters')
            .max(15, 'Lenght of input should not be longer than 15 characters')
            .required('Username is required'),

        password: Yup.string()
            .min(8, 'Lenght of password should be at least 8 characters')
            .max(15, 'Lenght of password should not be longer than 15 characters')
            .required('Password is required'),

        retypePassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please re-type password'),

        firstName: Yup.string()
            .max(15, 'Lenght of input should not be longer than 15 characters')
            .required('First name is required'),

        lastName: Yup.string()
            .max(20, 'Lenght of input should not be longer than 20 characters'),

        selectOption: Yup.string()
            .required('Country is required'),

        checkboxOption: Yup.string()
            .required('Please mark that you agree with the Terms and Conditions'),
    })

    return (
        <Formik
            const initialValues={{
                username: '',
                password: '',
                retypePassword: '',
                firstName: '',
                lastName: '',
                selectOption: '',
                checkboxOption: '',
            }}
            validationSchema={validate}
        >
            {formik => (
                <div>
                    <h4>Register and become a member</h4>
                    {console.log(formik.values)}
                    <Form>
                        <TextField label='Username*' name='username' type='text' />
                        <TextField label='Password*' name='password' type='password' />
                        <TextField label='Retype password*' name='retypePassword' type='password' />
                        <TextField label='First name*' name='firstName' type='text' />
                        <TextField label='Last name' name='lastName' type='text' />
                        <FormikControl label='Country*' control='select' name='selectOption' options={dropdownOptions} />
                        <FormikControl label='Agree to terms and conditions*' control='checkbox' name='checkboxOption' options={checkboxOptions} />

                        <button className='btn mt-3' type='submit'>Register</button>
                        <button className='btn mt-3 mx-3' type='reset'>Reset</button>
                    </Form>
                </div>
            )}
        </ Formik>
    )
}

export default Register
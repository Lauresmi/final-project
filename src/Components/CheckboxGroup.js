import { Field, ErrorMessage } from 'formik'
import React from 'react'
import TextError from './TextError'

function CheckboxGroup(props) {
    const { label, name, options, ...rest } = props

    return (
        <div className='my-3'>
            <Field name={name} {...rest}>
                {({ field }) => {
                    return (
                        <React.Fragment >
                            <input
                                className='me-2'
                                type='checkbox'
                                {...field}
                                checked={field.value}
                            />
                            <label>{label}</label>
                        </React.Fragment>
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default CheckboxGroup
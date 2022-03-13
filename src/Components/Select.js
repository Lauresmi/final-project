import { ErrorMessage, Field, useField } from 'formik'
import TextError from './TextError'

function Select(props) {
    const { label, name, options, ...rest } = props

    return (
        <div className='col-4'>
            <label htmlFor={name}>{label}</label>
            <Field as='select' className="form-select" aria-label="Default select example" id={name} name={name} {...name}>
                {
                    options.map(option => {
                        return (
                            <option className='mt-4' key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Select
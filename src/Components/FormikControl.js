import Select from "./Select"
import CheckboxGroup from "./CheckboxGroup"

function FormikControl(props) {
    const { control, ...rest } = props

    switch (control) {
        case 'select':
            return <Select {...rest} />

        case 'checkbox':
            return <CheckboxGroup {...rest} />
    }
}

export default FormikControl
import { useState, useEffect } from "react";

function Register() {
    const initialValues = { username: "", password: "", retypePassword: "", firstName: "", lastName: "", country: "", agreeToTAndC: ""  };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required";
        }
        if (!values.firstName) {
            errors.firstName = "First name is required";
        }
        if (!values.country) {
            errors.country = "Country is required";
        }
        if (values.retypePassword !== values.password) {
            errors.retypePassword = "Passwords must match";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        } else if (values.password.length > 20) {
            errors.password = "Password cannot exceed more than 20 characters";
        }
        return errors;
    };

    return (
        <div className="">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in successfully</div>
            ) : (
                <pre></pre>
            )}

            <form className="" onSubmit={handleSubmit}>
                <h4>Register</h4>

                <div className="row d-flex flex-column">

                    <div className="col-4 form-floating">
                        <input className="form-control" type="text" name="username" id="Username" placeholder="Username" value={formValues.username} onChange={handleChange} />
                        <label className="mx-2" for="floatingInput">Username*</label>
                    </div>
                    <p style={{ color: 'red' }}>{formErrors.username}</p>

                    <div className="col-4 form-floating">
                        <input className="form-control" type="password" name="password" id="Password" placeholder="Password" value={formValues.password} onChange={handleChange} />
                        <label className="mx-2" for="floatingInput">Password*</label>
                    </div>
                    <p style={{ color: 'red' }}>{formErrors.password}</p>

                    <div className="col-4 form-floating">
                        <input className="form-control" type="password" name="retypePassword" id="retypePassword" placeholder="Password" value={formValues.retypePassword} onChange={handleChange} />
                        <label className="mx-2" for="floatingInput">Retype password*</label>
                    </div>
                    <p style={{ color: 'red' }}>{formErrors.retypePassword}</p>

                    <div className="col-4 form-floating">
                        <input className="form-control" type="text" name="firstName" id="firstName" placeholder="firstName" value={formValues.firstName} onChange={handleChange} />
                        <label className="mx-2" for="floatingInput">First name*</label>
                    </div>
                    <p style={{ color: 'red' }}>{formErrors.firstName}</p>

                    <div className="col-4 form-floating">
                        <input className="form-control" type="text" name="lastName" id="lastName" placeholder="lastName" value={formValues.lastName} onChange={handleChange} />
                        <label className="mx-2" for="floatingInput">Last name</label>
                    </div>

                    <div className="col-4 form-floating mt-3">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>Select an option</option>
                            <option value="1">Latvia</option>
                            <option value="2">Estonia</option>
                            <option value="3">Lithuania</option>
                        </select>
                        <label className="mx-2" for="floatingSelect">Country*</label>
                    </div>
                    <p style={{ color: 'red' }}>{formErrors.country}</p>


                    <div className="col-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" value={formValues.agreeToTAndC} onChange={handleChange}/>
                                <label className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                        </div>
                    </div>
                    <p style={{ color: 'red' }}>{formErrors.agreeToTAndC}</p>

                    <button className="btn col-4 my-2">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register
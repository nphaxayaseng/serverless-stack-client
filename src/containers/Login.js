import React, { useState } from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import "./Login.css"
import { Auth } from "aws-amplify"
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";

import LoaderButton from '../components/LoaderButton';
import { onError } from '../libs/errorLib';

const Login = () => {
    const { userHasAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);


    const [ fields, handleFieldChange] = useFormFields({
        email: "",
        password:"",
    });
    const validateForm = () => {
        return fields.email.length > 0 && fields.password.length > 0;
    };

    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        try {
            await Auth.signIn(fields.email, fields.password);
            userHasAuthenticated(true);
            
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    };

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={fields.password}
                        onChange={handleFieldChange}
                        type="password"
                    />
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                    disabled={!validateForm()}>
                    Login 
                    </LoaderButton>
            </form>
        </div>
    );
}

export default Login;
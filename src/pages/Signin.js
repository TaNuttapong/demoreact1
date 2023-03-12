import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signin(props) {
    const navigate = useNavigate();
    console.log("props", props);

    return (
        <div>
            <h3>Sign in</h3>
            <div>
                <p>Username</p>
                <input
                    className="form-control w-1000"
                    type="text"
                    placeholder="demo@gmail.com"
                    autoFocus
                    required
                    value={props.email}
                    onChange={(e) => props.handleEmail(e)}
                />
            </div>
            <div>
                <p>Password</p>
                <input
                    className="form-control w-1000"
                    type="password"
                    placeholder="demo123"
                    required
                    value={props.password}
                    onChange={(e) => props.handlePassword(e)}
                />
            </div>
            <button
                className="btn btn-primary btn-sm w-100 mt-2"
                onClick={() => props.handleSignin()}
            >
                Sign in
            </button>
            <div className="d-flex align-items-center justify-content-center">
                <p className="text-center mt-3 mr-1">Don't have an account ?</p>
                <button
                    type="button"
                    className="btn btn-link px-0"
                    onClick={() => props.setHasAccount(!props.hasAccount)}
                >
                    sign up
                </button>
            </div>
        </div>
    );
}

export default Signin;

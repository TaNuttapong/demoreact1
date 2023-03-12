import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Signup(props) {
    const navigate = useNavigate();
    console.log("props", props);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.handleSignup();
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <h3>Sign up</h3>
                <div>
                    <p>Username</p>
                    <input
                        className="form-control "
                        type="text"
                        placeholder="demo@gmail.com"
                        value={props.email}
                        autoFocus
                        required
                        onChange={(e) => props.handleEmail(e)}
                    />
                </div>
                <div>
                    <p>Password</p>
                    <input
                        className="form-control w-1000"
                        type="password"
                        placeholder="demo123"
                        value={props.password}
                        required
                        onChange={(e) => props.handlePassword(e)}
                    />
                </div>
                <button className="btn btn-primary mt-2 w-100" type="submit">
                    Signup
                </button>
                <div className="d-flex align-items-center justify-content-center">
                    <p className="text-center mt-3 mr-1">Have an account?</p>
                    <button
                        className="btn btn-link px-0"
                        onClick={() => props.setHasAccount(!props.hasAccount)}
                    >
                        sign in
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Signup;

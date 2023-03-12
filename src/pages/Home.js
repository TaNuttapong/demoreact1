import React, { useState, useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logonew.png"

function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    const authListener = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {

            } else {

            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    const handleSignup = () => {
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((response) => {
                navigate("/profile");
                window.localStorage.setItem("user", response.user.email);
                setEmail(response.user.email);
                console.log("response", response);
                window.alert("Signup successful!");
            })
            .catch((err) => {
                console.log("err", err);
                window.alert("err");
            });
    }

    const handleSignin = () => {
        signInWithEmailAndPassword(getAuth(), email, password)
            .then((response) => {
                navigate("/profile");
                window.localStorage.setItem("user", response.user.email);
                setEmail(response.user.email);
                console.log("response", response);
                window.alert("Signin successful!");
            })
            .catch((err) => {
                console.log("err", err);
                window.alert("err");
            });
    };
    return (
        <Container
            className="shadow p-4 mb-5 bg-white reounded "
            div style={{ width: "500px" }}>
            <h1>wellcome to my webpages toxic 10 game</h1>
            <div className="text-center mt-3">
                <img src={logo} alt="logo" width={200} />
            </div>
            {hasAccount ?
                <Signup
                    email={email}
                    password={password}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    handleEmail={handleEmail}
                    handlePassword={handlePassword}
                    handleSignup={handleSignup}
                /> : <Signin
                    email={email}
                    password={password}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    handleEmail={handleEmail}
                    handlePassword={handlePassword}
                    handleSignin={handleSignin}
                />
            }
        </Container>
    )
}

export default Home;
import React from "react";
import { Container } from "react-bootstrap";
import gameprofile from "../assets/game-003.jpg"
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const email = window.localStorage.getItem("user")
    const handlelogout = () => {
        window.localStorage.clear();
        navigate("/");
        auth.signOut();
    }
    return (
        <Container className="shadow p-4 mt-5 bg-white rounded"
            style={{ width: "500px" }}
        >
            <div className="text-center">
                <h3>profile</h3>
            </div>
            <div className="text-center mt-3">
                <img src={gameprofile} alt="gameprofile" width={200} />
            </div>
            <div className="d-flex justify-content-center">
                <b>Email:</b>
                <p>{email}</p>
            </div>
            <div className="mt-3">
                <button
                    className="btn btn-primary mt-2 w-100"
                    onClick={() => handlelogout()}>
                    signout
                </button>
            </div>
        </Container>


    )
}
export default Profile
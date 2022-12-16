import "./Register.css";

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [user, setUser] = useState({});
    const nav= useNavigate()

    function handleSubmit() {
        console.log(user);
        fetch("http://localhost:4100/api/auth/register", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type" :"application/json" 
            }
        }).then(res => {
            console.log('response received')
            if(res.status === 200) nav("/login",true)
            else if(res.status === 401) console.log("unauthorized response")
        }).catch(err=>console.log(err))
    }

    return (
        <div>
            <h2 className="heading">Register Here</h2>
            <div className="register-container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email address
                    </label>
                    <input
                        onInput={(e) => {
                            e.preventDefault()
                            user.email = e.target.value;
                            setUser(user);
                        }}
                        value={user.email}
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">
                        Full Name
                    </label>
                    <input
                        onInput={(e) => {
                            e.preventDefault()
                            user.name = e.target.value;
                            setUser(user);
                        }}
                        value={user.name}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Enter full name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">
                        Password
                    </label>
                    <input
                        onInput={(e) => {
                            e.preventDefault()
                            user.password = e.target.value;
                            setUser(user);
                        }}
                        value={user.password}
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput3"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput4" className="form-label">
                        Date of Birth
                    </label>
                    <input
                        onInput={(e) => {
                            e.preventDefault()
                            user.dob = e.target.value;
                            setUser(user);
                        }}
                        value={user.dob}
                        type="date"
                        className="form-control"
                        id="exampleFormControlInput4"
                        placeholder="enter your date of birth"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput5" className="form-label">
                        Country
                    </label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                            e.preventDefault()
                            user.country = e.target.value;
                            setUser(user);
                        }}
                    >
                        <option value="1">India</option>
                        <option value="2">USA</option>
                        <option value="3">UK</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Register"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

export default Register;

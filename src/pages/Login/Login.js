import './Login.css'

import React from 'react'

const Login = () => {
    return (
        <div>
            <h2 className='login-heading'>Login Here</h2>
            <div className='login-container'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput3" placeholder="Enter password" />
                </div>
                
                <input type='submit' value='Login' className='btn btn-info' />
            </div>
        </div>
    )
}

export default Login


import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
        <div id="login" >
        <div className="container ">
          <div className=" ">
            <div className="row  justify-content-center section">
              <div className="col-4 section-title">
                <h2>Login</h2>
                
              </div>
              <form name="sentMessage" validate>
                <div className="row justify-content-md-center ">
                  <div className="col-md-8 text-center">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="User Name or Email"
                        required
                        // onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                  <input
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    // onChange={handleChange}
                    />
                  <p className="help-block text-danger"></p>
                </div>
                  </div>
                  
                </div>
                <p>
                    New User ? <Link to="/signin">Sign Up</Link>
                </p>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                 Login
                </button>
              </form>
            </div>
          </div>
                   
        </div>
      </div>
    </div>
  )
}

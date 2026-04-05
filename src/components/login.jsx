import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <div id="login">
        <div className="container ">
          <div className="col-md-8 justify-content-center">
            <div className="row   section">
              <div className="text-center section-title">
                <h2>Login</h2>
              </div>
              <form name="sentMessage" validate>
                <div className="row justify-content-md-center ">
                  <div className="col-md-12 text-center">
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
                      {/* <p className="help-block text-danger"></p> */}
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
                      {/* <p className="help-block text-danger"></p> */}
                    </div>
                  </div>
                </div>

                <div id="success"></div>
                <button
                  type="submit"
                  className="btn btn-custom btn-lg col-md-12"
                >
                  Login
                </button>
              </form>
              <p className="signup-link">
                Don't have an account yet?{" "}
                <Link id="signup" to="/signin">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

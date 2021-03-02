// eslint-disable-next-line
import React,{useState} from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Register from "./Register.jsx";
import logo from "../images/ex-header-background.jpg";

function SignIn()
{
 return (
    <div>
      <div className="container1">
        <div className="homeimg1">
          {<img className="signinheader" src={logo} />}
        </div>

        <div id="login">
          <h3 class="text-center text-white pt-5">Login form</h3>
          <div class="container">
            <div
              id="login-row"
              class="row justify-content-center align-items-center"
            >
              <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                  <form id="login-form" class="form-control">
                    <h3 class="text-center text-info logh3">Login</h3>
                    <div class="form-group">
                      <label for="email" class="text-info">
                        Email ID
                      </label>
                      <br />
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        class="form-control"                      
                        autocomplete="off"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" class="text-info">
                        Password:
                      </label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        
                        class="form-control"
                        
                        required
                      />
                    </div>
                    <div className="log">
                      <div class="form-group">
                        <label for="remember-me" class="text-info">
                          <span>Remember me</span> 
                          <span>
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                            />
                          </span>
                        </label>
                        <br />
                        <input
                          type="submit"
                          name="submit"
                          class="btn btn-info btn-md"
                          value="Submit"
                        />
                      </div>

                      <div id="register-link" class="text-right">
                        <a href="/register" class="text-info">
                          Register here
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;

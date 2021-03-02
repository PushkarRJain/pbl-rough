// eslint-disable-next-line

import React, {useState} from "react";
import logo from "../images/ex-header-background.jpg";

const axios=require('axios');

function Register(props) {
  const [state , setState] = useState({
      email : "",
      password : "",
      confirmpassword:"",
      successMessage: null
  })
  const handleChange = (e) => {
      const {id , value} = e.target   
      setState(prevState => ({
          ...prevState,
          [id] : value
      }))
  }

  const handleSubmitClick = (e) => {
      e.preventDefault();
      const payload={
          "email":state.email,
          "password":state.password,
          "confirmpassword":state.confirmpassword
      }
      axios.post('http://localhost:4000/app/register', payload);
  
    state.password === state.confirmpassword? (window.location='/home'):alert("Error!")
    
     
}

return (
    <div>
      <div className="container1">
        <div className="homeimg1">
          {<img className="signinheader" src={logo} />}
        </div>
        <div id="login">
          <h3 class="text-center text-white pt-5">Register form</h3>
          <div class="container">
            <div
              id="login-row"
              class="row justify-content-center align-items-center"
            >
              <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                  <form id="login-form" class="form-control"onSubmit={handleSubmitClick}>
                    <h3 class="text-center text-info regh3">Register</h3>
                    <div class="form-group">
                      <label for="username" class="text-info">
                        Email ID:
                      </label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={state.email}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Email"
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
                        value={state.password}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Password"
                        required
                        autocomplete="off"

                      />
                    </div>
                    <div class="form-group">
                      <label for="confirmpassword" class="text-info">
                        Confirm Password:
                      </label>
                      <br />
                      <input
                        type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        class="form-control"
                        placeholder="Confirm password"
                        autocomplete="off"
                        required
                        value={state.confirmpassword}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="submit"
                        name="submit"
                        class="btn btn-info btn-md"
                        value="submit"
                      />
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
export default Register;

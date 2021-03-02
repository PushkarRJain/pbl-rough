import React from "react";
import Navbar from "./Navbar";
import Content from "./Full_Content.jsx";
import SignIn from "./SignIn.jsx";
import Upload from "./Upload.jsx";
import Logout from "./Logout.jsx";
import Register from "./Register.jsx";
import FooterContact from "./FooterContact.jsx";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route path="/home" component={Content} />
        <Route path="/signin" component={SignIn} />
        <Route path="/upload" component={Upload} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Logout} />

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <FooterContact />
      </div>
    </BrowserRouter>
  );
}

export default App;

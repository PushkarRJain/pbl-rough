import React from "react";
import logo from "../images/ex-header-background.jpg";
import logo2 from "../images/office1.png";
//import SignIn from "./SignIn.jsx";
import workflow from "../images/pbl-layout.png";
import logo3 from "../images/office2.png";
import Cards from "./Cards.jsx";
import logo4 from "../images/office3.png";
import Headings from "./Headings.jsx";

function Content() {
  return (
    <div>
      <div className="container">
        <div className="homeimg">
          <div>{<img className="logoimg" src={logo} />}</div>
          <div>{<img className="logo2img" src={logo2} />}</div>
        </div>
        <div id="project">
          <h1> Project </h1>
          <h2>Automate and Analyse Attendance System </h2>
          <p>
            Attendance system will function via a website. The teacher or
            professor will login in and then upload or take a photo of the
            attendance sheet. After uploading he can download the excel sheet
            and analysis report of the same. Also the attendance will get
            directly uploaded on the SQL server. The class and subject will be
            specified on the paper, so the user won’t have to spend time
            selecting all these things. In one click his work will be done. As
            attendance systems use SQL databases, we will show the output on SQL
            server. If we link SQL databases to sites like MIS of PICT website,
            we'll be able to automatically update attendance there.
            <div>{<img className="logo3img" src={logo3} />}</div>
            <div>{<img className="workflowimg" src={workflow} />}</div>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Content;

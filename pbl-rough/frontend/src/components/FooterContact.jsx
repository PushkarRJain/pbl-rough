import React from "react";

function FooterContact() {
  return (
    <div class="footer">
      <div clas="row">
        <footer class="foot">
          <div class="container">
            <div class="row padding">
              <div class="col-md-3 fhp">
                <h5 className="fh5">
                  AUTOMATED ATTENDENCE
                  <br />
                  <p className="fp"> gdpr@gmail.com </p>
                </h5>
              </div>

              <div class="col-md-3 ficons">
                <ul class="nav">
                  <li class="nav-item">
                    <a href="" class="nav-link pl-0">
                      <i class="fa fa-facebook fa-lg"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                      <i class="fa fa-twitter fa-lg"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                      <i class="fa fa-github fa-lg"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                      <i class="fa fa-instagram fa-lg"></i>
                    </a>
                  </li>
                </ul>
                <br />
              </div>
              <div class="col-md-3 ">
                <h5 className="fpa">
                  Pune,Maharashtra,India.
                  <br />
                  <h5 className="fc">Contact:123456789</h5>
                </h5>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default FooterContact;

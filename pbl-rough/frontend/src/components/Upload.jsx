import React from "react";

function Upload() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
            <i class="fa fa-camera fa-3x camicon" aria-hidden="true"></i>
            <h2 class="camh2"> Take photo </h2>
          </div>
          <div className="col-md-3 ">
            <i class="fa fa-file-image-o fa-3x fileicon" aria-hidden="true"></i>
            <h2 class="fileh2"> Upload photo </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Upload;

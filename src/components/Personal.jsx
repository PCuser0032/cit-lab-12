import React from "react";
import Repos from "./OpenPersonal";

export default class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  auth() {
    let token = document.getElementById("input-token").value;
    localStorage.setItem("token", token);
    window.location.reload();
  }
  render() {
    return (
      <div>
        <div className="ms-4 d-flex" id="form">
          <div>
            <input
              className="form-control"
              id="input-token"
              placeholder="Enter your token"
            />
          </div>
          <div className="ms-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                this.auth();
              }}
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="mt-4">
          <Repos />
        </div>
      </div>
    );
  }
}

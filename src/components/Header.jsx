import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="d-flex p-4" id="nav">
        <div>
          <Link className="btn btn-primary" to="/">
            Main
          </Link>
        </div>
        <div className="ms-4">
          <Link className="btn btn-primary" to="/search">
            Search
          </Link>
        </div>
      </div>
    );
  }
}

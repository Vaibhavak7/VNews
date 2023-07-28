import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container d-flex justify-content-between">
            <Link className="navbar-brand" to="/">
              {" "}
              <h2>VNews</h2>
            </Link> 
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">General</Link>
                            </li> */}
                <li className="nav-item" style={{ backgroundColor: "black" }}>
                  <DropdownButton
                    className="l"
                    title="Category"
                    style={{ backgroundColor: "black" }}
                  >
                    <Dropdown.Item
                      className="nav-item"
                      style={{ color: "black" }}
                    >
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/business"
                          style={{ color: "black" }}
                        >
                          Business
                        </Link>
                      </li>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/entertainment"
                          style={{ color: "black" }}
                        >
                          Entertainment
                        </Link>
                      </li>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {" "}
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/health"
                          style={{ color: "black" }}
                        >
                          Health
                        </Link>
                      </li>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/science"
                          style={{ color: "black" }}
                        >
                          Science
                        </Link>
                      </li>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/sports"
                          style={{ color: "black" }}
                        >
                          Sports
                        </Link>
                      </li>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/technology"
                          style={{ color: "black" }}
                        >
                          Technology
                        </Link>
                      </li>
                    </Dropdown.Item>
                  </DropdownButton>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

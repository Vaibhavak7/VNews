import React, { Component } from "react";
import Google from './Google.png';
import Twitter from './Twitter.gif';
import Instagram from './Instagram.png';
import Link from './Link.gif';

export class Footer extends Component {
  render() {
    return (
      <div> 
        <footer className="bg-dark text-center text-white"> 
          <div className="container p-4 pb-0">
            <section className="mb-4">
            <a
                className="btn btn-outline-light btn-floating m-1"
                href="/"
                role="button"
              >
                <i className="fab fa-instagram"><img src={Link} alt="Link" style={{height: "25px"}}/></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="/"
                role="button"
              >
                <i className="fab fa-facebook-f"><img src={Instagram} alt="Instagram" style={{height: "25px"}} /></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="/"
                role="button"
              >
                <i className="fab fa-twitter"><img src={Twitter} alt="Twitter" style={{height: "25px"}}/></i>
              </a>

              
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="/"
                role="button"
              >
                <i className="fab fa-instagram"><img src={Google} alt="Google" style={{height: "25px"}}/></i>
              </a>

              
              
            </section>
          </div>

          <div
            className="text-center p-3"
            
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              Vaibhav Kokitkar
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

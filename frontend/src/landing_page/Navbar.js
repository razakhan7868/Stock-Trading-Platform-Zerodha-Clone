import React from 'react';
import { Link } from 'react-router-dom';

function Navbar (){
    return (
        <>
        {/* <div className="signup-hero">
          <h1>Open a free demat and trading account online</h1>
          <p>
            Start investing brokerage free and join a community of 1.6+ crore investors and traders
          </p>
        </div> */}

        <div className="container">
            <nav className="navbar navbar-expand-lg border-bottom" style={{background: "#FFF"}}>
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/media/images/logo.svg" alt="Logo" width="100" height="20"/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent">
                  <i className="fa fa-bars" style={{fontSize: '1.25rem'}}></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                      <Link className="nav-link active" to="/signup">Signup</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/products">Products</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/pricing">Pricing</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/support">Support</Link>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>
        </div>
        </>
    );
}

export default Navbar;
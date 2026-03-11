import React from 'react';
import { Link } from 'react-router-dom';

function Navbar (){
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg border-bottom" style={{background: "#FFF"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src="/media/images/logo.svg" alt="Logo" width="100" height="20"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa fa-bars" style={{fontSize: '1.25rem'}} aria-hidden="true"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li className="nav-item text-muted">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
         <li className="nav-item text-muted">
          <Link className="nav-link active" to="/products">Products</Link>
        </li>
         <li className="nav-item text-muted">
          <Link className="nav-link active" to="/pricing">Pricing</Link>
        </li>
         <li className="nav-item text-muted">
          <Link className="nav-link active" to="/support">Support</Link>
        </li>
          <li className="nav-item ms-2">
            <a className="nav-link" href="#" aria-label="menu"><i className="fa fa-bars" aria-hidden="true"></i></a>
          </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
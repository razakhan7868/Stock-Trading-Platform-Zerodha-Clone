import React from "react";

function NotFound() {
    return (
        <div className="container p-4 mb-5 text-muted">
        <div className="row text-center">
            <h1 className="mt-5 fs-4">404 NotFound</h1>
            <p>Sorry, We couldn’t find the page you were looking for.Vist <a href="https://zerodha.com/" style={{textDecoration: "none"}}> Zerodha’s home page</a></p>
        </div>
       </div>
    );
}

export default NotFound;
import React from "react";

function Hero(){
    return (
        <div className='container text-center border-bottom'>
        <div className='row p-5 mt-5 mb-5'>
            <h1 className='fs-3 text-center text-muted'>Zerodha Products</h1>
            <h3 className='text-center text-muted fs-5 mt-2'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='text-center text-muted fs-6 mt-3'>Check out our <a href="#">investment offerings <i className="fa fa-arrow-right" aria-hidden="true"></i></a></p>
        </div>
        </div>
    );
}

export default Hero;

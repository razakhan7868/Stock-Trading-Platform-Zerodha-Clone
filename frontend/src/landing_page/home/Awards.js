import React from "react";

function Awards() {
    return (
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6 p-5">
                        <img src="/media/images/largestBroker.svg" alt="Largest broker" className="img-fluid" />
                    </div>
                    <div className="col-md-6 p-5 mt-3">
                        <h1>Largest stock broker in India</h1>
                        <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes daily by trading and investing in:</p>
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li>Futures and options</li>
                                    <li>Commodity derivatives</li>
                                    <li>Currency derivatives</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Stocks and IPOs</li>
                                    <li>Direct mutual funds</li>
                                    <li>Bonds and Govt. Securities</li>
                                </ul>
                            </div>
                    {/* <img src='/media/images/pressLogos.png' alt='Press logos' className="d-block mx-auto my-3 img-fluid" style={{width: "200px", maxWidth: "100%"}} /> */}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Awards;
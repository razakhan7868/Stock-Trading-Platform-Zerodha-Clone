import React from "react";

function Hero() {
    return (
       <div className="container p-5 mb-5">
        <div className="row text-center">
                        <img
                            src="/media/images/homeHero.png"
                            alt="Home hero"
                            className="mb-5"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/600x200?text=Hero+Image'; }}
                        />
            <h1 className="mt-5">Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-2 btn btn-primary custom-btn fs-5' rounded-0 mb-5" style={{width: "18%", margin: "0 auto", fontSize: "1.30rem", borderRadius: 0}}>Sign up for free</button>
        </div>
       </div>
    );
}

export default Hero;
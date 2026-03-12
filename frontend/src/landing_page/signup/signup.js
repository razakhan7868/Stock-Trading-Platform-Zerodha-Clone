// import React from 'react';

// function Signup() {
//     return (
//         <div className='container text-center border-bottom'>
//         <div className='row p-5 mt-5 mb-5'>
//             <h1 className='fs-3 text-center text-muted'>Open a free demat and trading account online</h1>
//             <h3 className='text-center text-muted fs-5 mt-2'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h3>
//         </div>
//         </div>
        
//             // <h1>Signup Page</h1>
        
//     );
// }

// export default Signup;



import React from "react";

function Signup() {
  return (
    <div className="container border-bottom">

      {/* Heading */}
      <div className="row text-center p-5 mt-5">
        <h1 className="fs-3 text-muted">
          Open a free demat and trading account online
        </h1>

        <h3 className="text-muted fs-5 mt-2">
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </h3>
      </div>

      {/* Left Image + Right Form */}
      <div className="row align-items-center pb-5">

        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src="/media/images/signup.png"
            alt="Hero"
            className="img-fluid"
            style={{ width: "80%" }}
          />
        </div>

        {/* RIGHT SIGNUP FORM */}
        <div className="col-md-6">

          <h2>Signup now</h2>
          <p className="text-muted">Or track your existing application</p>

          <div className="input-group mb-3">
            <span className="input-group-text">🇮🇳 +91</span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your mobile number"
            />
          </div>

          <button className="btn btn-primary w-90">
            Get OTP
          </button>

          <p className="text-muted mt-3" style={{fontSize:"14px"}}>
            By proceeding, you agree to the Zerodha terms & privacy policy
          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;
import React from "react";

function Hero() {
  return (
    <div
      className="w-100"
      style={{
        backgroundColor: "#eaeced9b",
        paddingTop: "50px",
        paddingBottom: "60px"
      }}
      >
    
    <div className="container " >
      <div className="d-flex justify-content-between align-items-center">
      <h1 className="fw-semibold">Support Portal</h1>
      <button className="btn btn-primary mt-3 rounded-0 muted">
          Create a Ticket
        </button>
        </div>


      {/* Search Box */}
      <div className="d-flex mt-4 mb-3 align-items-center">
        
        <div className="position-relative" style={{ width: "100%" }}>

          {/* Search Icon */}
          <i
            className="fa fa-search position-absolute"
            style={{
              left: "15px",
              top: "14px",
              color: "rgb(153, 153, 153)",
              fontSize: "18px"
            }}
          ></i>

          {/* Input */}
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Eg: How do I open my account, How do I activate F&O…"
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              border: "1px solid #ddd"
            }}
          />
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default Hero;

import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="" className="d-inline-block mt-3" style={{textDecoration: "none", color: "#1976d2"}}>See pricing <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div className="col-md-6">
          <div className="pricing-stats d-flex justify-content-end gap-4">
            <div className="stat">
              <div className="stat-circle">
                <span className="stat-rupee">₹</span>
                <span className="stat-value">0</span>
              </div>
              <div className="stat-label">Free account<br/>opening</div>
            </div>

            <div className="stat">
              <div className="stat-circle">
                <span className="stat-rupee">₹</span>
                <span className="stat-value">0</span>
              </div>
              <div className="stat-label">Free equity delivery and<br/>direct mutual funds</div>
            </div>

            <div className="stat">
              <div className="stat-circle">
                <span className="stat-rupee">₹</span>
                <span className="stat-value">20</span>
              </div>
              <div className="stat-label">Intraday and<br/>F&O</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing;
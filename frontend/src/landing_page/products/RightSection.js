import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container mt-5">
        <div className="row align-items-center">

    {/* LEFT : TEXT */}
    <div className="col-6 ps-5 mt-4">
      <h2 className="fw-bold">{productName}</h2>

      <p className="text-muted" style={{ fontSize: "17px" }}>
        {productDescription}
      </p>

      <div className="mt-3">
        <a
          href={learnMore}
          className="fw-semibold text-decoration-none ms-4"
          style={{ color: "#387ed1" }}
        >
          Learn More <i className="fa fa-arrow-right ms-1"></i>
        </a>
      </div>
    </div>
    
    {/* RIGHT : IMAGE */}
    <div className="col-6 pe-5 d-flex justify-content-end mt-5">
      <img
        src={imageURL}
        style={{ width: "90%", objectFit: "contain" }}
        alt="product"
      />
    </div>
  </div>
</div>
    );
}

export default RightSection;
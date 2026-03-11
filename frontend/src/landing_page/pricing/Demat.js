import React from 'react';

function Demat() {
  return (
    <div className="container mt-5">

      {/* TITLE – full width */}
      <h3 className="text-muted mb-4 mt-5" style={{ paddingLeft: "100px" }}>
        Demat AMC (Annual Maintenance Charge)
      </h3>

      {/* TABLE – CENTER */}
      <div className="account-table-wrapper border rounded shadow-sm mx-auto" style={{ width: "85%" }}>
        <table className="table mb-0 text-muted">
          <thead>
            <tr className="only-header-line">
              <th>Value of holdings</th>
              <th>AMC</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="py-3">Up to ₹4 lakh</td>
              <td className="py-3">
                <span className="free-tag">FREE</span>
              </td>
            </tr>

            <tr>
              <td className="py-3">₹4 lakh - ₹10 lakh</td>
              <td className="py-3">₹ 100 per year, charged quarterly*</td>
            </tr>

            <tr>
              <td className="py-3">Above ₹10 lakh</td>
              <td className="py-3">₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-muted text-center mt-3" style={{ fontSize: "13px" }}
>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href="#">click here</a>.</p>

    </div>
    
    );
}

export default Demat;
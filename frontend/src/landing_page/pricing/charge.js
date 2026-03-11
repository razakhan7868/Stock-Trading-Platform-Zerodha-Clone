import React from 'react';

function Charge() {
  return (
    <div className="container mt-5">

      {/* TITLE – full width */}
      <h3 className="text-muted mb-4 mt-5" style={{ paddingLeft: "100px" }}>
       Charges for optional value added services
      </h3>

      {/* TABLE – CENTER */}
      <div className="account-table-wrapper border rounded shadow-sm mx-auto" style={{ width: "85%" }}>
        <table className="table mb-0 text-muted">
          <thead>
            <tr className="only-header-line">
              <th>Service</th>
              <th>Billing Frequency</th>
                <th>charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="py-3">Tickertape</td>
              <td className="py-3 ">Monthly / Annual</td>
              <td className="py-3 ">Free: 0 | Pro: 249/2399</td>
            </tr>

            <tr>
              <td className="py-3">Smallcase</td>
              <td className="py-3">	Per transaction</td>
              <td className="py-3">	Buy & Invest More: 100 | SIP: 10</td>
            </tr>

            <tr>
              <td className="py-3">Kite Connect</td>
              <td className="py-3">Monthly</td>
              <td className="py-3">Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
}

export default Charge;
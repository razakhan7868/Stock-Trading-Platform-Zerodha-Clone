import React from "react";

function CurrencyTable() {
  return (
    <div className="d-flex justify-content-center mt-4">
  <div className="table-wrapper shadow-sm border rounded p-0">
    <table
      className="table text-muted table-borderless mb-0"
      style={{ borderCollapse: "separate", borderSpacing: "0 12px", width: "100%" }}
    >
        <thead>
          <tr>
            <th></th>
            <th>Currency Futures</th>
            <th>Currency Options</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="fw-semibold">Brokerage</td>
            <td>0.03% or ₹ 20/executed order whichever is lower</td>
            <td>₹ 20/executed order</td>
          </tr>

          <tr>
            <td className="fw-semibold">STT/CTT</td>
            <td>No STT</td>
            <td>No STT</td>
          </tr>

          <tr>
            <td className="fw-semibold">Transaction charges</td>
            <td>NSE: 0.00035% <br />BSE: 0.00045%</td>
            <td>NSE: 0.0311% <br />BSE: 0.001%</td>
          </tr>

          <tr>
            <td className="fw-semibold">GST</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>

          <tr>
            <td className="fw-semibold">SEBI charges</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>

          <tr>
            <td className="fw-semibold">Stamp charges</td>
            <td>0.0001% or ₹10 / crore on buy side</td>
            <td>0.0001% or ₹10 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default CurrencyTable;

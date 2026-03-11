import React from 'react';

function EquityTable() {
  return (
   <div className="d-flex justify-content-center mt-4">
  <div className="table-wrapper pricing-border p-0">

    <table
      className="table text-muted table-borderless mb-0"
      style={{ borderCollapse: "separate", borderSpacing: "0 12px", width: "100%" }}
    >
        <thead>
          <tr>
            <th></th>
            <th>Equity Delivery</th>
            <th>Equity Intraday</th>
            <th>F&O Futures</th>
            <th>F&O Options</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="fw-semibold">Brokerage</td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed<br />order whichever is lower</td>
            <td>0.03% or Rs. 20/executed<br />order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>

          <tr>
            <td className="fw-semibold mt-2">STT/CTT</td>
            <td>0.1% on buy & sell</td>
            <td>0.025% on the sell side</td>
            <td>0.02% on sell side</td>
            <td>0.125% of the intrinsic value on <br /> options that are bought and exercised <br />0.1% on sell side (on premium) </td>
          </tr>

          <tr>
            <td className="fw-semibold">Transaction charges</td>
            <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
            <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
            <td>NSE: 0.00173% <br /> BSE: 0%</td>
            <td>NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)</td>
          </tr>

          <tr>
            <td className="fw-semibold">GST</td>
            <td>18% on (brokerage + SEBI <br /> charges + transaction <br /> charges)</td>
            <td>18% on (brokerage + SEBI <br /> charges + transaction <br /> charges)</td>
            <td>18% on (brokerage + SEBI <br /> charges + transaction <br /> charges)</td>
            <td>18% on (brokerage + SEBI <br /> charges + transaction <br /> charges)</td>
          </tr>

          <tr>
            <td className="fw-semibold">SEBI charges</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>

          <tr>
            <td className="fw-semibold">Stamp charges</td>
            <td>0.015% or ₹1500 / crore on <br /> buy side</td>
            <td>0.003% or ₹300 / crore on <br /> buy side</td>
            <td>0.002% or ₹200 / crore on <br /> buy side</td>
            <td>0.003% or ₹300 / crore on <br /> buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default EquityTable;

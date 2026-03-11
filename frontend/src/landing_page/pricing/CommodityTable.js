import React from "react";

function CommodityTable() {
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
            <th>Commodity Futures</th>
            <th>Commodity Options</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="fw-semibold">Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>₹ 20/executed order</td>
          </tr>

          <tr>
            <td className="fw-semibold">STT/CTT</td>
            <td>0.01% on sell side (Non-Agri)</td>
            <td>0.05% on sell</td>
          </tr>

          <tr>
            <td className="fw-semibold">Transaction charges</td>
            <td>MCX: 0.0021% <br /> NSE: 0.0001% </td>
            <td>MCX: 0.0418% <br /> NSE: 0.001%</td>
          </tr>

          <tr>
            <td className="fw-semibold">GST</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>

          <tr>
            <td className="fw-semibold">SEBI charges</td>
            <td>Agri: <br /> ₹1 / crore <br /> Non-agri: <br /> ₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>

          <tr>
            <td className="fw-semibold">Stamp charges</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default CommodityTable;

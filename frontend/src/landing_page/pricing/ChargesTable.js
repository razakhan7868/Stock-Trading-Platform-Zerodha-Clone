import React from "react";

function ChargesTable() {
  return (
    <div className="container mt-5">

      {/* TITLE – full width */}
      <h3 className="text-muted mb-4" style={{ paddingLeft: "100px" }}>
        Charges for account opening
      </h3>

      {/* TABLE – CENTER */}
      <div className="account-table-wrapper border rounded shadow-sm mx-auto" style={{ width: "85%" }}>
        <table className="table mb-0 text-muted">
          <thead>
            <tr className="only-header-line">
              <th>Type of account</th>
              <th className="text-end">Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="py-3">Online account</td>
              <td className="py-3 text-end">
                <span className="free-tag">FREE</span>
              </td>
            </tr>

            <tr>
              <td className="py-3">Offline account</td>
              <td className="py-3 text-end">
                <span className="free-tag">FREE</span>
              </td>
            </tr>

            <tr>
              <td className="py-3">NRI account (offline only)</td>
              <td className="py-3 text-end">₹ 500</td>
            </tr>

            <tr>
              <td className="py-3">
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td className="py-3 text-end">₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ChargesTable;

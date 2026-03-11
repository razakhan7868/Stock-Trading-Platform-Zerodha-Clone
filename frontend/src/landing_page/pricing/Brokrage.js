import React from 'react';

function Brokrage() {
  return (
    <div className="row text-center mb-5">

      <div className="col-md-4">
        <div className="p-4 border rounded">
          <h3>Free equity delivery</h3>
          <p className="text-muted">No brokerage for delivery trades.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="p-4 border rounded">
          <h3>Intraday trades</h3>
          <p className="text-muted">
            ₹20 or 0.03% per executed order whichever is lower.
          </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="p-4 border rounded">
          <h3>F&O, currency & commodity</h3>
          <p className="text-muted">Flat ₹20 per executed order.</p>
        </div>
      </div>

    </div>
  );
}

export default Brokrage;


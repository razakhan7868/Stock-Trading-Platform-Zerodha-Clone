import React, { useState } from 'react';
import Hero from './Hero';
import Brokrage from './Brokrage';
import Navbar from './../Navbar';
import OpenAccount from '../OpenAccount';
import EquityTable from "./EquityTable";
import CurrencyTable from "./CurrencyTable";
import CommodityTable from "./CommodityTable";
import charges from './ChargesTable';
import ChargesTable from './ChargesTable';
import Demat from './Demat';
import Charge from './charge';
import Chargesexplained from './chargesexplained';

function PricingPage() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <>
      {/* <Navbar /> */}

      <div className="container mt-5">

        {/* Top Hero Section */}
        <Hero />

        {/* Brokerage Cards */}
        {/* <Brokrage /> */}

        {/* Tabs */}
        <ul className="nav nav-tabs border-0 mb-4">
          <li className="nav-item" style={{ paddingLeft: "100px" }}>
            <button
              className={`nav-link fw-semibold ${activeTab === "equity" ? "active" : ""}`}
              onClick={() => setActiveTab("equity")}
            >
              <h3>Equity</h3>
            </button>
          </li>

          <li className="nav-item">
            <button
              className={`nav-link fw-semibold ${activeTab === "currency" ? "active" : ""}`}
              onClick={() => setActiveTab("currency")}
            >
              <h3>Currency</h3>
            </button>
          </li>

          <li className="nav-item">
            <button
              className={`nav-link fw-semibold ${activeTab === "commodity" ? "active" : ""}`}
              onClick={() => setActiveTab("commodity")}
            >
              <h3>Commodity</h3>
            </button>
          </li>
        </ul>

        {/* Tab Table Content */}
        {activeTab === "equity" && <EquityTable />}
        {activeTab === "currency" && <CurrencyTable />}
        {activeTab === "commodity" && <CommodityTable />}

      </div>
      <h5 className='text-muted text-center mt-4'><a href="#" style={{ textDecoration: "none" }}>Calculate your costs upfront </a>using our brokerage calculator</h5>

      {/* <OpenAccount /> */}
      <ChargesTable />
      <Demat />
      <Charge />
      <Chargesexplained />
    </>
  );
}

export default PricingPage;

import React from "react";
import { Routes, Route } from "react-router-dom";

// Correct Imports – Matching your actual filenames
import Apps from "./Apps";
import Funds from "./Funds";
import Holding from "./Holding";
import Order from "./Order";
import Position from "./Position";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
    return (
        <div className="dashboard-container">

            {/* Sidebar Watchlist */}
            <WatchList />

            <div className="content">
                <Routes>
                    <Route path="/" element={<Summary />} />
                    <Route path="/orders" element={<Order />} />
                    <Route path="/holdings" element={<Holding />} />
                    <Route path="/positions" element={<Position />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/apps" element={<Apps />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;

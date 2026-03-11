import React, { useState } from "react";

function HelpTopics() {
  const [openIndex, setOpenIndex] = useState(null);

  const topics = [
    {
      icon: "fa-plus",
      title: "Account Opening",
      items: [
        <a href="#">Resident individual</a>,
        <a href="#">Minor</a>,
        <a href="#">Non Resident Indian (NRI)</a>,
        <a href="#">Company, Partnership, HUF and LLP</a>,
        <a href="#">Glossary</a>
      ]
    },
    {
      icon: "fa-user-circle",
      title: "Your Zerodha Account",
      items: [
        <a href="#">Your Profile</a>,
        <a href="#">Account modification</a>,
        <a href="#">Client Master Report (CMR) and Depository Participant (DP)</a>,
        <a href="#">Nomination</a>,
        <a href="#">Transfer and conversion of securities</a>
      ]
    },
    {
      icon: "fa-paper-plane",
      title: "Kite",
      items: [
        <a href="#">IPO</a>,
        <a href="#">Trading FAQs</a>,
        <a href="#">Margin Trading Facility (MTF) and Margins</a>,
        <a href="#">Charts and orders</a>,
        <a href="#">Alerts and Nudges</a>,
        <a href="#">General</a>

      ]
    },
    {
      icon: "fa-rupee-sign",
      title: "Funds",
      items: [
        <a href="#">Add money</a>,
        <a href="#">Withdraw money</a>,
        <a href="#">Add bank accounts</a>,
        <a href="#">eMandates</a>
      ]
    },
    {
      icon: "fa-at",
      title: "Console",
      items: [
        <a href="#">Portfolio</a>,
        <a href="#">Corporate actions</a>,
        <a href="#">Funds statement</a>,
        <a href="#">Reports</a>,
        <a href="#">Profile</a>,
        <a href="#">Segments</a>
      ]
    },
    {
      icon: "fa-clock",
      title: "Coin",
      items: [
        <a href="#">Mutual funds</a>,
        <a href="#">National Pension Scheme (NPS)</a>,
        <a href="#">Fixed Deposit (FD)</a>,
        <a href="#">Features on Coin</a>,
        <a href="#">Payments and Orders</a>,
        <a href="#">General</a>,
      ]
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-4">

      {topics.map((item, index) => (
        <div key={index}>
          
          {/* TOPIC HEADER */}
          <div
            onClick={() => toggle(index)}
            className="d-flex align-items-center justify-content-between p-2 mb-4 border rounded"
            style={{ background: "#fff", cursor: "pointer" }}
          >
            <div className="d-flex align-items-center">

              {/* ICON */}
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#e7f0fd",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  color: "#1a73e8",
                  marginRight: "15px"
                }}
              >
                <i className={`fa ${item.icon}`}></i>
              </div>

              {/* TITLE */}
              <h5 className="m-0 text-muted">{item.title}</h5>
            </div>

            {/* ARROW */}
            <i
              className={`fa fa-chevron-${openIndex === index ? "up" : "down"} text-muted`}
              style={{ fontSize: "20px" }}
            ></i>
          </div>

          {/* DROPDOWN CONTENT */}
          {openIndex === index && item.items.length > 0 && (
            <div
              className="ps-5 pe-5 pt-2 pb-4 mb-3 border rounded"
              style={{ background: "#fff", marginTop: "-20px" }}
            >
              <ul style={{ listStyleType: "disc", color: "#1a73e8" }}>
                {item.items.map((sub, i) => (
                  <li key={i} className="mb-3">
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
   </div> 
  );
}

export default HelpTopics;

import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import HelpTopics from "./HelpTopics";

function SupportPage() {
  return (
    <div>

      {/* HERO SECTION */}
      <Hero />

      {/* CREATE TICKET SECTION */}
      {/* MAIN CONTENT GRID */}
      <div className="container mt-5 mb-5">

        <div className="row">

          {/* LEFT COLUMN - HELP TOPICS */}
          <div className="col-md-8">
            <HelpTopics />
          </div>

           {/* RIGHT COLUMN - NOTICE + QUICK LINKS */}
          <div className="col-md-4">

            {/* NOTICE BOX */}
            <div
              className="p-4 mb-4"
              style={{
                background: "#fff5e6",
                borderLeft: "6px solid orange",
                borderRadius: "4px"
              }}
            >
              <ul className="m-0 p-0" style={{ listStyleType: "disc" }}>
                <li className="mb-2">
                  <a href="#" className="text-primary">
                    Additional exposure margin on securities under MWPL
                  </a>
                </li>

                <li>
                  <a href="#" className="text-primary">
                    Adjustment of F&O contracts of WIPRO due to dividend
                  </a>
                </li>
              </ul>
            </div>

            {/* QUICK LINKS BOX */}
            <div className="border rounded">

              {/* HEADER */}
              <div
                className="p-3"
                style={{ backgroundColor: "#f8f9fa", fontWeight: "bold" }}
              >
                Quick links
              </div>

              {/* LINKS */}
              <ul className="list-group list-group-flush">

                <li className="list-group-item">
                  <a href="#" className="text-primary">
                    1. Track account opening
                  </a>
                </li>

                <li className="list-group-item">
                  <a href="#" className="text-primary">
                    2. Track segment activation
                  </a>
                </li>

                <li className="list-group-item">
                  <a href="#" className="text-primary">
                    3. Intraday margins
                  </a>
                </li>

                <li className="list-group-item">
                  <a href="#" className="text-primary">
                    4. Kite user manual
                  </a>
                </li>

                <li className="list-group-item">
                  <a href="#" className="text-primary">
                    5. Learn how to create a ticket
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>

      

    
      <CreateTicket />
       {/* <HelpTopics /> */}

    </div>
    </div>
   
  );
}

export default SupportPage;

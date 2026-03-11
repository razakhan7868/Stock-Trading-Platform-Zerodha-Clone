import React from 'react';

function Footer () {
    return (
      <footer style={{backgroundColor: "#f8f9fa"}}>
        <div className="container border-top mt-5">
  <div className="row gx-3 footer-row mt-5">
    
    <div className="col-lg-4">
      <img src="media/images/logo.svg" style={{ width: 150 }} />
      <p className='mb-1 text-muted'>© 2010 - 2025, Zerodha Broking Ltd.</p>
      <p className='text-muted'>All rights reserved</p>
      {/* <i className="fa fa-facebook-official" aria-hidden="true"></i>
      <i className="fa fa-instagram" aria-hidden="true"></i>
      <i className="fa fa-linkedin" aria-hidden="true"></i> */}

        <div>
          <div className="d-flex align-items-center gap-3 mt-3">
            <a href="#" className="social-icon">
              <i className="fab fa-x" aria-hidden="true"></i>
            </a>

            <a href="#" className="social-icon">
              <i class="fa-brands fa-square-facebook"></i>
            </a>

            <a href="#" className="social-icon">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>

            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
          </div>

          <div className="border-top mt-3"></div>

          <div className="d-flex align-items-center gap-3 mt-3 pb-4">
            <a href="#" className="social-icon-circle">
              <i className="fab fa-youtube" aria-hidden="true"></i>
            </a>

            <a href="#" className="social-icon-circle">
              <i class="fa-brands fa-whatsapp"></i>
            </a>

            <a href="#" className="social-icon-circle">
              <i className="fab fa-telegram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

    <div className="col-lg-2">
      <p className='fs-5'>Account</p>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Open demat account</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Minor demat account</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">NRI demat account</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Commodity</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Dematerialisation</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Fund transfer</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">MTF</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Referral program</a>
    </div>

    <div className="col-lg-2">
      <p className='fs-5'>Support</p>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Contact us</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Support portal</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">How to file a complaint?</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Status of your complaints</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Bulletin</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Circular</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Z-Connect blog</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Downloads</a>
    </div>

    <div className="col-lg-2">
      <p className='fs-5'>Company</p>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">About</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Philosophy</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Press & media</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Careers</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Zerodha Cares (CSR)</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Zerodha.tech</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Open source</a>
    </div>

    <div className="col-lg-2">
      <p className='fs-5 '>Quick links</p>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Upcoming IPOs</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Brokerage charges</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Market holidays</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Economic calendar</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Calculators</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Markets</a>
        <a href="#" className="text-muted text-decoration-none d-block mb-3">Sectors</a>
    </div>
  </div>
  <div className='mt-5 ' style={{fontSize:"11px"}}>
  <p className='text-muted'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="#">complaints@zerodha.com</a>  for DP related to <a href="#">dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

  <p className='text-muted '>Procedure to file a complaint on <a href="#">SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

  <a href="#">Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>

  <p className='text-muted '>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

  <p className='text-muted '>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

  <p className='text-muted '>India's largest broker based on networth as per NSE. <a href="#">NSE broker factsheet</a></p>

  <p className='text-muted '>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#">create a ticket here.</a></p>

  <p className='text-muted '>Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
</div>
<div className="mt-2 pb-3 " style={{fontSize:"13px" , textAlign:"center"}}>
  <a href="#" className="text-muted text-decoration-none me-3">NSE</a> 
  <a href="#" className="text-muted text-decoration-none me-3">BSE </a> 
  <a href="#" className="text-muted text-decoration-none me-3">MCX</a> 
  <a href="#" className="text-muted text-decoration-none me-3">Terms & conditions</a>
  <a href="#" className="text-muted text-decoration-none me-3">Policies & procedures</a>
  <a href="#" className="text-muted text-decoration-none me-3">Privacy policy </a>
  <a href="#" className="text-muted text-decoration-none me-3">Disclosure</a>
  <a href="#" className="text-muted text-decoration-none me-3">For investor's attention</a>
  <a href="#" className="text-muted text-decoration-none me-3">Investor charter</a>
</div>
</div>
</footer>

    );
}

export default Footer;
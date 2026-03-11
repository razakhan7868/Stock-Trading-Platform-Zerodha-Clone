import React from 'react';

function Universal() {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
            <h5 className='text-muted text-center' style={{marginTop:"100px", marginBottom:"100px"}}>Want to know more about our technology stack? Check out the <a href='textDecoration: none'> zerodha.tech</a> blog.</h5>
            <h4 className='text-center'>The Zerodha Universe</h4>
            <p className='text-muted text-center mt-4'>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='col-4 p-3'>
                <img src='/media/images/zerodhaFundHouse.png' style={{width:"150px", height:"80px", objectFit:"contain"}}/>
                <p className='text-muted'>Our asset management venture
                that is creating simple and transparent index
                funds to help you save for your goals.
                </p>

            </div>
            <div className='col-4 p-3'>
                <img src='/media/images/sensibullLogo.svg' style={{width:"200px", height:"100px", objectFit:"contain"}}/>
                <p className='text-muted'>Options trading platform that lets you
                create strategies, analyze positions, and examine
                data points like open interest, FII/DII, and more.
                </p>
            </div>
            <div className='col-4 p-3'>
                <img src='/media/images/tijori.svg' style={{width:"200px", height:"100px", objectFit:"contain"}}/>
                <p className='text-muted'>Investment research platform
                that offers detailed insights on stocks,
                sectors, supply chains, and more.</p>
            </div>
            <div className='col-4 p-3'>
                <img src='/media/images/streakLogo.png' style={{width:"200px", height:"100px", objectFit:"contain"}}/>
                <p className='text-muted'>Systematic trading platform
                that allows you to create and backtest
                strategies without coding.</p>
            </div>

            <div className='col-4 p-3'>
                <img src='/media/images/smallcaseLogo.png' style={{width:"200px", height:"100px", objectFit:"contain"}}/>
                <p className='text-muted'>Thematic investing platform
                that helps you invest in diversified
                baskets of stocks on ETFs.</p>
            </div>

            <div className='col-4 p-3'>
                <img src='/media/images/dittoLogo.png' style={{width:"200px", height:"100px", objectFit:"contain"}}/>
                <p className='text-muted'>Personalized advice on life
                and health insurance. No spam
                and no mis-selling.</p>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 mb-4 text-muted">
        <button className="p-2 btn btn-primary custom-btn fs-5' rounded-0 mb-5 " style={{width: "18%", margin: "0 auto", fontSize: "1.30rem", borderRadius: 0}}>Sign up for free</button>
        </div>
        </div>  
    )
}

export default Universal;
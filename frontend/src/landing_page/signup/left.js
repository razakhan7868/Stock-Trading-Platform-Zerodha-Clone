import React from 'react';

function Left({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googleplay,
    appstore,
}) {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-6 pe-5 d-flex justify-content-end mt-5'>
                    <img src={imageURL} 
                    style={{ width: "90%", objectFit: "contain" }}/>
                </div>

                <div className='col-6 ps-5 mt-4'>
                    <h2 className='fw-bold'>{productName}</h2>
                    <p className='text-muted' style={{ fontSize: "17px" }}>{productDescription}</p>

                    <div>
                       <a href={tryDemo}>Try Demo <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i></a>
                       <a href={learnMore} style={{marginLeft:"50px"}}>Learn More <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i></a>
                        
                    </div>

                    <div className='mt-3'>
                        <a href={googleplay}>
                            <img src="media/images/googleplaybadge.svg"/>
                        </a>
                        <a href={appstore}>
                            <img src="media/images/appstorebadge.svg" style = {{marginLeft: "50px"}} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;

import React from 'react'
import Image from 'next/image';
export default function Food() {
    return (
        <div className="container"style={{paddingTop: "60px"}}>
        <div className="row">
        <h1 style={{textAlign:"center"}}>
          How It Works
        </h1>
      </div>  
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail " style={{border: "0px", padding: "0px"}}>
                <Image src="/panel1.png" className="img-responsive" alt="food" width={1000} height={1000} />
                <div className="caption">
                  <h2 style={{textAlign: "center"}}>You tell us your meal preference</h2>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail" style={{border: "0px", padding: "0px"}}>
                <Image src="/panel2.png" className="img-responsive" alt="food" width={1000} height={1000} />
                <div className="caption">
                  <h2 style={{textAlign: "center"}}>We prepare fresh meals in your kitchen using your groceries</h2>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail" style={{border: "0px", padding: "0px"}}>
                <Image src="/panel3.png" className="img-responsive" alt="food" width={1000} height={1000} />
                <div className="caption">
                  <h2 style={{textAlign: "center"}}>You enjoy incredible meals</h2>
                </div>
            </div>
          </div>
        </div>
      </div>   
        </div>
    )
}

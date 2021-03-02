import React from 'react';
import Image from 'next/image';
export default function Pricing() {
    return (
        <div className="container">
            <div className="row" style={{padding: "40px", margin: "60px"}}>
        <h1 style={{textAlign: "center"}}>
          <strong>
            We recommend tasty recipes, use the needed groceries and prepare custom meals while you relax, spend time with your loved ones or just watch your favourite show!
        </strong>
        </h1>
      </div>
      <hr/>
      <div className="row" style={{padding: "20px", margin: "20px"}}>
        <h1 style={{textAlign: "center"}}>
          <strong>
            Pricing
        </strong>
        </h1>
      </div>
      <div className="container">
        <div className="row">        
            <div className="col-md-4 col-md-offset-2 text-right">
                <Image src="/price.jpg" height={500} width= {600}/>
            </div>
            <div className="col-md-6 " >
              <h3><strong>We keep it simple. Price per meal $7.75 </strong></h3>
              <h4><strong> We help you save your monthly grocery bills, prepare delicious meals and clean up when done!</strong></h4>
              <button type="button" className="btn btn-default btn-lg" style={{borderRadius:"300px",border:"0px",color:"white",backgroundColor: "#e90c7a",fontSize:"25px",padding:"15px 30px 15px 30px", margin: "20px",borderColor: "#e90c7a"}}>CALL US OR BOOK ONLINE</button>
             <ul>
                <li><h3>Subscriptions can be cancelled anytime</h3></li>
                <li><h3>Cancel or skip your meal prep anytime</h3></li>
              </ul>
            </div>
       </div>
      </div>
      <div className="row" style={{padding: "20px",margin: "20px"}}>
          <strong style={{textAlign: "center", fontSize:"20px"}}>
            We use the exact amount of your groceries and are committed to reducing landfill contribution across India
        </strong>
      </div>
        </div>
    )
}

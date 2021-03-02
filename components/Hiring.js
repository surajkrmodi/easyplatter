import React from 'react'
import Image from 'next/image';
export default function Hiring() {
    return (
    <div>
        <style jsx>{`
         #myhover {
          position: relative;
          top: 0;
          transition: top ease 0.5s;
        }
        #myhover: hover {
          top: -10px;
        }
        `} 
         </style>
    <div className="container">
        <div className="row">
          <h3 style={{textAlign: "center"}}>
            <strong>
            Switch your chef at any time for FREE<br/>
            Chefs clean up* when done for FREE<br/>
            Meals can be delivered for FREE
          </strong>
          </h3>
        </div>   
      <hr />
      <div className="row" style={{padding: "40px",margin: "60px"}}>
        <h1 style={{textAlign: "center"}}>
          <strong>
          Why hire a personal chef?
        </strong>
        </h1>
      </div>
      <div className="row"  >
        <div className="col-md-3">
          <div className="thumbnail" style={{border: "0px", padding: "0px"}}>
              <Image src="/hover1.png" alt="Lights"  width={1000} height={1000}  id="myhover" />
              <div className="caption">
                <a href="#">
                  <h2 style={{textAlign: "center"}}><strong>Save Serious Time and Money</strong></h2>
                </a>
              </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="thumbnail" style={{border: "0px", padding: "0px"}}>
              <Image src="/hover2.png" alt="Nature"width={1000} height={1000} id="myhover" />
              <div className="caption">
                <a href="#">
                  <h2 style={{textAlign: "center"}}><strong>Contactless Cooking: Stay Safe</strong></h2>       
                </a>
              </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="thumbnail" style={{border: "0px", padding: "0px"}}>
              <Image src="/hover3.png" alt="Fjords" width={1000} height={1000} id="myhover" />
              <div className="caption">
                <a href="#">
                  <h2 style={{textAlign: "center"}}><strong>Best Rated Local Cooks</strong></h2>
                </a>
              </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="thumbnail" style={{border: "0px", padding: "0px"}}>
              <Image src="/hover4.png" alt="Fjords" width={1000} height={1000}  id="myhover" />
              <div className="caption">
                <a href="#">
                  <h2 style={{textAlign: "center"}}><strong>Help reduce landfill and waste</strong></h2>
                </a>
              </div>
          </div>
        </div>
      </div>
      <div className="row" style={{padding: "20px", margin: "30px", textAlign: "center"}}>
        <button type="button" className="btn btn-default btn-lg" style={{borderRadius:"300px",border:"0px",color:"white",backgroundColor: "#e90c7a",fontSize:"25px",padding:"15px 30px 15px 30px", margin: "20px",borderColor: "#e90c7a"}}>BOOK HERE</button>
      </div>
      </div>
    </div>
    );
}

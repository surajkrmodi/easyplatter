import React from 'react'
import Image from 'next/image';
export default function Contacts() {
    return (
        <div>
        <div  style={{position: "relative",textAlign: "center", color: "white", paddingTop:"60px"}}>
        <Image src="/lovecook.jpg" alt="lovecook" width= {2000} height={800} />
        <div className="centered" style={{position:"absolute", top: "50%",left: "50%" ,transform: "translate(-50%, -50%)"}}>
        <div>
            <h1>Enjoy Cooking? Join our team!!</h1>
            <button type="button" className="btn btn-success btn-lg" style={{borderRadius:"300px",color:"white",fontSize: "25px",padding:"15px 30px 15px 30px", margin: "20px"}} > I Love Cooking</button>
        </div>
        </div>
        </div>
        <div className="container-fluid" style={{paddingTop: "0px" ,marginTop: "0px", backgroundColor: "#333"}} >
      <div className="row" style={{padding: "20px", margin: "20px"}}>
        <h1 style={{textAlign: "center", color: "aliceblue"}}>
          <strong>
            Call (902) 441-5145 or Book Online
        </strong>
        </h1>
        <form style={{color:"antiquewhite"}}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">News Letter SignUp</button>
</form>
      </div>
    </div>
    <div className="container" style={{paddingTop:"60px",textAlign: "center"}}>
      <a href="#"><strong>BOOK YOUR CHEF</strong></a>
      <h1> Copyright &copy Easy Food. All right reserved </h1>
    </div>
        </div>
    )
}

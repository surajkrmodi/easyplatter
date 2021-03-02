import React from 'react'
import Image from 'next/image';
export default function Partners() {
    return (
        <div>
        <div className="container" style={{paddingTop: "60px"}} >
      <div className="row" style={{padding: "20px", margin: "20px"}}>
        <h1 style={{textAlign: "center"}}>
          <strong>
            We're proud to work with our partners who share our vision
        </strong>
        </h1>
      </div>
    </div>
    <div className="container" style={{paddingTop: "60px"}}>
      <div className="row" style={{background:"#333",color:"#333" ,padding: "10px", margin: "10px"}} >
        <div className="col-md-12">
          <div className="carousel slide multi-item-carousel" id="theCarousel">
            <div className="carousel-inner">
              <div className="item active">
                <div className="col-xs-4"><a href="#1"><Image loader={myLoader} src="fremantle,australia" className="img-responsive" width= {300} height={300}  /></a></div>
              </div>
              <div className="item">
                <div className="col-xs-4"><a href="#1"><Image loader={myLoader} src="perth,australia" className="img-responsive" height={300} width= {300}/></a></div>
              </div>
              <div className="item">
                <div className="col-xs-4"><a href="#1"><Image loader={myLoader} src="west-australia" className="img-responsive" height={300} width= {300}/></a></div>
              </div>
              <div className="item">
                <div className="col-xs-4"><a href="#1"><Image loader={myLoader} src="perth" className="img-responsive"height={300} width= {300} /></a></div>
              </div>
              <div className="item">
                <div className="col-xs-4"><a href="#1"><Image loader={myLoader} src="quokka,perth" className="img-responsive" height={300} width= {300}/></a></div>
              </div>
              <div className="item">
                <div className="col-xs-4"><a href="#1"><Image loader={myLoader} src="margaretriver,australia" className="img-responsive" height={300} width= {300}/></a></div>
              </div>
              <div className="item">
                <div className="col-xs-4"><a href="#1"><Image loader={myLoader} src="perth,australia&r=7" className="img-responsive" height={300} width= {300}/></a></div>
              </div>
            </div>
            <a className="left carousel-control" href="#theCarousel" data-slide="prev"><i className="glyphicon glyphicon-chevron-left"></i></a>
            <a className="right carousel-control" href="#theCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
const myLoader = ({ src, width, height }) => {
    return `https://source.unsplash.com/300x300/?${src}`;
  }

import Link from 'next/link';
import Image from 'next/image';
const Carousel = () => (
    <div>
    <div className="carousel slide"  id="myslider" data-ride="carousel" style={{margin: "0px", padding: "0px", border: "0px"}}>
    <ol className="carousel-indicators">
      <li data-target="#myslider" data-slide-to="0" className="active"></li>
      <li data-target="#myslider" data-slide-to="1"></li>
      <li data-target="#myslider" data-slide-to="2"></li>
    </ol> 
    <div className="carousel-inner" >
      <div className="item active">
        <Image src="/carousel1.jpg" width={2000} height={900}/>
        <div className="carousel-caption">
          <h2> For Families who prefer spending time with their kids</h2>
        </div>
      </div>
      <div className="item ">
        <Image src="/carpusel2.jpg" width={2000} height={900}/>
        <div className="carousel-caption">
          <h2> Top-rated Halifax chefs who cook in your kitchen for $7.75/meal</h2>
        </div>
      </div>
      <div className="item ">
        <Image src="/carpusel3.jpg" width={2000} height={900}/>
        <div className="carousel-caption">
          <h2> For working professionals who want healthy meal options, and....</h2>
        </div>
      </div>
    </div>
    <a href="#myslider" className="left carousel-control" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a href="#myslider" className="right carousel-control" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
    </a>
  </div> 
  </div>
);

export default Carousel;
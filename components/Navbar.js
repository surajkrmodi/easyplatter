import Link from 'next/link';
const Navbar = () => (
    <div>
        {/* <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
        </ul> */}
        <style jsx>{`
        {/* ul {
            background: #333;
            color: #fff;
            list-style: none;
            display: flex
        }

        ul li {
            font-size: 18px;
            margin-right: 20px;
        }

        ul li a {
            color: #fff;
            text-decoration:none;
        }
        #navhead {
          
        } */}
        `}</style>

  <nav className="navbar navbar-default " style={{margin: "0px", padding: "0px", border: "0px"}}>
  
  <div className="navbar-header">
    <a href="#" className="navbar-brand">Easy</a>
    <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mydropdown">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
  </div>

  <div className="collapse navbar-collapse " id="mydropdown">
  <ul className="nav navbar-nav" style={{margin: "0px", padding: "0px", border: "0px",overflow:"auto",whiteSpace: "nowrap"}}>
    <li className="active navbar-left"><a href="#"><strong>Home</strong></a></li>
    <li><a href="#"><strong>Book Now</strong> </a></li>
    <li><a href="#"><strong>Meet our cooks</strong> </a></li>
    <li><a href="#"><strong>Well-being and Safety</strong> </a></li>
    <li><a href="#"><strong>Our Story</strong> </a></li>
    <li><a href="#"><strong>Testimonials</strong> </a></li>
    <li><a href="#"><strong>Advisiory Team</strong> </a></li>
    <li><a href="#"><strong>Career</strong> </a></li>
    <li><a href="#"><strong>Faq</strong> </a></li>


  </ul>

  <button className="btn btn-default navbar-btn navbar-right" style={{marginLeft: "10px"}}> Register</button>
  <button className="btn btn-primary navbar-btn navbar-right" > Login</button>
</div>

</nav>
  </div>
);

export default Navbar;
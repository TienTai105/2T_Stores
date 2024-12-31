import React from "react";
import Slider from "react-slick"
import '../catslider/index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CatSlider =()=>{
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        arrows:true
      };
    
    return(
      <>
        <section className="catSliderSection">
            <div className="container-fluid">
                <h2 className="hd">featured</h2>
                <Slider {...settings} className="cat_slider_Main">
                    <div className="item">
                      <div className="info">
                        <Link to="/listing"><a><img src={'/Images/pr12.jpg'} alt="Product 1"/></a></Link>
                        <h4 className="productName">AIR FORCE 1</h4>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <img src={'/Images/pr18.png'} alt="Product 1"/> 
                        <h4 className="productName">AIR JORDAN 1</h4>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <img src={'/Images/pr11.jpg'} alt="Product 1"/> 
                        <h4 className="productName">CORTEZ</h4>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <img src={'/Images/pr4.jpg'} alt="Product 1"/> 
                        <h4 className="productName">KILLSHOT</h4>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <img src={'/Images/pr5.jpg'} alt="Product 1"/> 
                        <h4 className="productName">PEGASUS 41</h4>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <img src={'/Images/pr6.jpg'} alt="Product 1"/> 
                        <h4 className="productName">VAPORFLY</h4>
                      </div> 
                    </div>
                    <div className="item">
                      <div className="info">
                        <img src={'/Images/pr7.jpg'} alt="Product 1"/> 
                        <h4 className="productName">DUNKS</h4>
                      </div> 
                    </div>
                </Slider>
            </div>
        </section>
        <div class="bottom-viewall">
        <Link to={"/Listing"}><a href="Bestseller.html" class="btn">SHOP NOW</a></Link>
    </div>
        <br/><br/>
        </>
        )
}
export default CatSlider;
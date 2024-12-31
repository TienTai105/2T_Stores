import React from "react";
import './style.css'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
const Banners = () =>{
return(
    <>
    <section className="bannerSection">
        <div className="container-fluid">
        <h2 className="hd">New Product</h2>
            <div className="row">
                <div className="col">
                    <div className="box">
                        <Link><img src={'/Images/banner01.jpg'} className="w-100 transition"/></Link>
                    </div>
                </div>

                <div className="col">
                    <div className="box">
                        <Link><img src={'/Images/banner02.jpg'} className="w-100 transition"/></Link>
                    </div>
                </div>

                <div className="col">
                    <div className="box">
                        <Link><img src={'/Images/banner04.jpg'} className="w-100 transition"/></Link>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-viewall">
        <a href="/listing" class="btn">SHOP NOW</a>
    </div>
</section>
</>
)
}
export default Banners;
import React from "react";
import './style.css'

const Blog = () => {
    return(
        <> <h1 class="heading">Bl<span>og</span></h1>
        <section id="blog">
        <div className="blog-box">
        <div className="blog-img">
            <img src={'/Images/blog8.jpg'} alt=""/>
        </div>
        <div className="blog-details">
            <h4>Nike is best for choose</h4>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
            <a href="#">CONTINUE READING</a>
        </div>
        <h1>13/12</h1>
</div>
        <div className="blog-box">
        <div className="blog-img">
            <img src={'/Images/blog3.jpg'} alt=""/>
        </div>
        <div className="blog-details">
            <h4>Nike is best for choose</h4>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
            <a href="#">CONTINUE READING</a>
        </div>
        <h1>14/12</h1>
</div>
        <div className="blog-box">
        <div className="blog-img">
            <img src={'/Images/blog 5.jpg'} alt=""/>
        </div>
        <div className="blog-details">
            <h4>Nike is best for choose</h4>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
            <a href="#">CONTINUE READING</a>
        </div>
        <h1>14/12</h1>
</div>
        <div className="blog-box">
        <div className="blog-img">
            <img src={'/Images/blog7.jpg'} alt=""/>
        </div>
        <div className="blog-details">
            <h4>Nike is best for choose</h4>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
            <a href="#">CONTINUE READING</a>
        </div>
        <h1>14/12</h1>
</div>
        </section>
    </>
    )
}
export default Blog;
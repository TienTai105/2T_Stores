import React from "react";
import './style.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1 className="about-title">About Us</h1>
                <p className="about-tagline">Empowering the World, One Step at a Time.</p>
            </div>

            <div className="about-content">
                {/* Section: Who We Are */}
                <div className="about-section">
                    <div className="about-image">
                        <img src="/Images/blog 4.jpg" alt="Who We Are" />
                    </div>
                    <div className="about-text">
                        <h2>Who We Are</h2>
                        <p>
                            Nike is more than just a brand; it's a symbol of excellence, innovation, and resilience. 
                            Since our inception, we’ve been committed to crafting products that not only elevate performance 
                            but also inspire greatness. From athletes striving for gold to everyday individuals chasing 
                            personal goals, we’re here to empower every journey.
                        </p>
                        <p>
                            Our story began in 1964 under the name Blue Ribbon Sports. Decades later, we’ve grown into a global 
                            phenomenon, but our core remains unchanged: to inspire and innovate for athletes everywhere. If you 
                            have a body, you’re an athlete, and we’re here to help you unleash your potential.
                        </p>
                    </div>
                </div>

                {/* Section: Our Mission */}
                <div className="about-section reverse">
                    <div className="about-image">
                        <img src="/Images/blog 5.jpg" alt="Our Mission" />
                    </div>
                    <div className="about-text">
                        <h2>Our Mission</h2>
                        <p>
                            At Nike, we strive to bring inspiration and innovation to every athlete in the world. We believe 
                            in pushing boundaries, breaking records, and redefining limits. Our mission isn’t just about selling 
                            products; it’s about crafting experiences and building a community where everyone feels they belong.
                        </p>
                        <p>
                            Our products are a testament to this commitment. From cutting-edge running shoes that redefine comfort 
                            to sustainable apparel that supports a healthier planet, every piece is a reflection of our dedication 
                            to quality, performance, and responsibility.
                        </p>
                    </div>
                </div>

                {/* Section: Innovation & Design */}
                <div className="about-section">
                    <div className="about-image">
                        <img src="/Images/blog 6.jpg" alt="Innovation and Design" />
                    </div>
                    <div className="about-text">
                        <h2>Innovation & Design</h2>
                        <p>
                            Our journey is fueled by innovation. From the iconic Air Max series to the groundbreaking Flyknit 
                            technology, we’ve redefined what’s possible in the world of sportswear. We invest heavily in research 
                            and development to ensure that every product not only meets but exceeds expectations.
                        </p>
                        <p>
                            At Nike, design isn’t just about aesthetics; it’s about creating solutions. Our products are designed 
                            to enhance performance, inspire confidence, and adapt to the evolving needs of athletes everywhere. 
                            We believe that the future of sports is limitless, and we’re here to shape it.
                        </p>
                    </div>
                </div>

                {/* Section: Sustainability */}
                <div className="about-section reverse">
                    <div className="about-image">
                        <img src="/Images/blog7.jpg" alt="Sustainability" />
                    </div>
                    <div className="about-text">
                        <h2>Our Commitment to Sustainability</h2>
                        <p>
                            At Nike, we’re not just creating products; we’re shaping a better future. Sustainability is at the 
                            heart of everything we do. From using recycled materials in our products to implementing eco-friendly 
                            manufacturing processes, we’re committed to reducing our environmental footprint.
                        </p>
                        <p>
                            Through initiatives like Move to Zero, we aim to achieve zero carbon and zero waste. Because we believe 
                            that the health of the planet is essential to the health of sports, and we’re dedicated to playing our part.
                        </p>
                    </div>
                </div>

                {/* Section: Our Community */}
                <div className="about-section">
                    <div className="about-image">
                        <img src="/Images/blog7.jpg" alt="Our Community" />
                    </div>
                    <div className="about-text">
                        <h2>Our Community</h2>
                        <p>
                            At the heart of Nike lies our community. From global athletes to local enthusiasts, we’re united by 
                            a shared passion for excellence. Our programs and partnerships aim to uplift communities, create 
                            opportunities, and inspire the next generation of leaders.
                        </p>
                        <p>
                            We’re more than a brand; we’re a movement. A movement that celebrates diversity, champions inclusivity, 
                            and empowers individuals to reach new heights. Together, we’re building a legacy that will stand the 
                            test of time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section class="contact" id="contact">
            <h2 className="hd">Contact Us</h2>
            <div class="row">
                <form action="">
                    <input type="text" placeholder="Name" class="box" />
                    <input type="email" placeholder="Email" class="box" />
                    <input type="email" placeholder="PhoneNumber" class="box" />
                    <textarea name="" class="box" placeholder="Message" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="send message" class="btn" />
                </form>
                <div class="image">
                    <img src={'/Images/contact.1.jpg'} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Contact;
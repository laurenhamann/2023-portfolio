import React from "react";
import { Link } from "gatsby";

export const Contact = () => (
    <section id="contact" data-test="contact">
        <h1> Want More? </h1>
        <div id="contact-container">
            <a href="https://www.linkedin.com/in/lauren-hamann-773701214/" target="_blank">Linkdin</a>
            <a href="https://www.etsy.com/shop/ArtfullyByLauren" target="_blank">Etsy</a>
            <a href="mailto:laurenhamanndev@gmail.com" target="_blank">Email</a>
            <Link to="/blog-hub" target="_blank">
                Blog
            </Link>
        </div>
    </section>
)
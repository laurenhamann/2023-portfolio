import React from "react";
import { Link } from "gatsby";

export const Contact = () => (
    <section id="contact" data-test="contact">
        <h1> Want More? </h1>
        <div id="contact-container">
            <a href="https://www.linkedin.com/in/lauren-hamann-773701214/" onClick="window.open(this.href,'_blank');return false;">Linkdin</a>
            <a href="https://artfullybylauren.etsy.com" onClick="window.open(this.href,'_blank');return false;">Etsy</a>
            <a href="mailto:laurenhamanndev@gmail.com">Email</a>
            <a href="https://github.com/LaurenwallerDesigns" onClick="window.open(this.href,'_blank');return false;">GitHub</a>
            {/* <Link to="/blog-hub">
                Blog
            </Link> */}
        </div>
    </section>
)
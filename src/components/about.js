import React from "react";

export const About = () => (
  <section id="about" data-test="about-article">
    <h1 id="about-title"> About Me </h1>
    <h3>
      I am a <u>Frontend Developer</u>. Based in Alabama.
    </h3>
    <p>
      <span className="words">I love...</span>
      <br />
      <br />
      <br />
      <span>~</span> to create web applications and challenge myself.
      <br />
      <br />
      <span>~</span> when you get a new idea and it forms in a daydream.
      <br />
      <br />
      <span>~</span> That feeling when you are driving and that seemingly
      impossible problem just solves itself.
      {/* An "aha"gasm */}
      <br />
      <br />
      <br />
      <hr />
      Besides coding, you will find me with headphones on. I listen to
      audiobooks exclusively, but I also love a fun podcast.
    </p>
  </section>
);

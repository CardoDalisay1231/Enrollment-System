import React from "react";
import "./Fonts.css";
import "./About.css";
function About() {
  return (
    <section id="About">
      <h1 className="titles">ABOUT</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h3>MANDATE</h3>
              <br />
              <p>
                Section 2 of Republic Act No. 8468 “An Act Converting the Don
                Severino Agricultural College in the Municipality of Indang,
                Province of Cavite into a State University, to be Known as the
                Cavite State University” states that, “The University shall
                primarily provide advance instruction and professional training
                in agriculture, science and technology, education and other
                related fields, undertake research and extension services, and
                provide progressive leadership in these areas.”
              </p>
            </div>
            <div className="details-container">
              <h3>VISION</h3>
              <br />
              <p>
                The premier university in historic Cavite globally recognized
                for excellence in character development, academics, research,
                innovation and sustainable community engagement.
              </p>
            </div>
            <div className="details-container">
              <h3>MISSION</h3>
              <br />
              <p>
                Cavite State University shall provide excellent, equitable and
                relevant educational opportunities in the arts, sciences and
                technology through quality instruction and responsive research
                and development activities.
              </p>
            </div>
            <div className="details-container">
              <h3>HISTORY</h3>
              <br />
              <p>
                Cavite State University (CvSU) began as a small school in 1906
                and went through many name changes as it grew. It finally became
                a university in 1998 and now has 11 campuses across Cavite
                province. CvSU offers around 100 academic programs to over
                25,000 students and is recognized for its focus on agriculture,
                technology, and producing well-rounded graduates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

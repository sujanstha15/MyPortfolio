// ...existing code...
import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg'; // replace path or remove if you don't have an image

function About() {
    return (
        <section className="about">
            <div className="about__container">
                <img src={profilePic} alt="Profile" className="about__avatar" />
                <div className="about__content">
                    <h1 className="about__title">About Me</h1>
                    <p className="about__intro">
                        I'm a front-end developer who builds accessible, responsive web apps.
                        I enjoy turning design ideas into clean, performant code.
                    </p>

                    <h2 className="about__subtitle">Skills</h2>
                    <ul className="about__skills">
                        <li>HTML &amp; CSS</li>
                        <li>JavaScript / React</li>
                        <li>Responsive Design</li>
                        <li>Git &amp; Tooling</li>
                    </ul>

                    <div className="about__actions">
                        <a href="/contact" className="btn">Contact</a>
                        <a href="/resume.pdf" className="btn btn--secondary" target="_blank" rel="noopener noreferrer">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
// ...existing code...
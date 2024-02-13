import React from 'react';
import './About.css';
import ProfileImage from '../../assets/images/profile.png'; // Replace with the path to your image

const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>I am [Your Name], a [Your Profession] with a passion for [Your Passion]. With a background in [Your Background], I have developed a keen interest in [Your Interest]. My journey has led me to work on [Projects/Initiatives] that have [Impact of Your Work]. I believe in [Your Beliefs/Principles] and continuously strive to [Your Goals/Objectives].</p>
                </div>
                <div className="about-image">
                    <img src={ProfileImage} alt="About Me" />
                </div>
            </div>
            <div className="education-section">
                <h2>My Education</h2>
                <ul>
                    <li>
                        <strong>Bachelor's Degree in [Your Major]</strong> - [Your University], [Year of Graduation]
                    </li>
                    <li>
                        <strong>Master's Degree in [Your Major]</strong> - [Your University], [Year of Graduation]
                    </li>
                    {/* Add more as needed */}
                </ul>
            </div>
        </div>
    );
}

export default About;

import React from 'react';
import './TeamAndWork.css';
import team1 from '../assets/Dylan.jpeg';
import team2 from '../assets/Kanay.JPG';
import Gallery1 from '../assets/Gallery1.JPG';
import Gallery2 from '../assets/Gallery2.JPG';
import Gallery3 from '../assets/Gallery3.JPG';
import Gallery4 from '../assets/Gallery4.JPG';

function TeamAndWork() {
  return (
    <section className="teamwork-section">
      <h2 className="teamwork-title">MEET THE TEAM</h2>
      <hr className="teamwork-divider" />

      <div className="team-grid">
        <div className="team-member">
          <img src={team1} alt="Team Member 1" />
          <h3>Dylan Pierce</h3>
          <h4>Co-Founder & Lead Developer</h4>
        </div>
        <div className="team-member">
          <img src={team2} alt="Team Member 2" />
          <h3>Kanay Debur</h3>
          <h4>Co-Founder & Lead Business Manager</h4>
        </div>
        <h4 className = "team-description"> Our names are Dylan and Kanay and we’re rising Sophomores at the University of Maryland and Indiana University. 
          We’ve lived in Short Hills for most of our lives and have a passion for business, entrepreneurship and, of course, cars! We have multiple
          years of experience with detailing cars and we are dedicated to providing the best auto detailing service possible for those in the Millburn/Short Hills area and beyond.</h4>
      </div>
      <h2 className="teamwork-title">OUR WORK</h2>
      <hr className="teamwork-divider" />
      <div className="work-gallery">
        <img src={Gallery1} alt="Work 1" />
        <img src={Gallery2} alt="Work 2" />
        <img src={Gallery3} alt="Work 1" />
        <img src={Gallery4} alt="Work 2" />
      </div>
    </section>
  );
}

export default TeamAndWork;

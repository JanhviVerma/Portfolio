import React from 'react';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';

function Achievements() {
  const achievements = [
    { title: "1st Place in School Coding Competition", icon: FaTrophy },
    { title: "Black Belt in Taekwondo", icon: FaMedal },
    { title: "Completed Python Certification Course", icon: FaCertificate },
  ];

  return (
    <section id="achievements">
      <h2>Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <achievement.icon />
            <span>{achievement.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
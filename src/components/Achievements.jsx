function Achievements() {
  const achievements = [
    "Solved 300+ DSA problems",
    "CodeChef Max Rating: 1373",
    "Codeforces Max Rating: 917",
    "B.Tech Information Technology Student at IIIT Allahabad",
  ];

  return (
    <section id="achievements" className="section">
      <h2 className="section-title">Achievements</h2>

      <div className="achievements-container">
        {achievements.map((achievement) => (
          <div className="achievement-card" key={achievement}>
            {achievement}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
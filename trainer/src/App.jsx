import React from "react";
import "./App.css";

function App() {
  const sessions = [
    {
      id: 1,
      title: "React Basics",
      date: "20 Jun 2026",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "JavaScript Advanced",
      date: "18 Jun 2026",
      status: "Completed",
    },
    {
      id: 3,
      title: "CSS Workshop",
      date: "22 Jun 2026",
      status: "Upcoming",
    },
  ];

  const upcoming = sessions.filter(
    (session) => session.status === "Upcoming"
  ).length;

  const completed = sessions.filter(
    (session) => session.status === "Completed"
  ).length;

  return (
    <div className="dashboard">
      <h1>Trainer Session Dashboard</h1>

      <div className="stats-container">
        <div className="card">
          <h2>Total Sessions</h2>
          <p>{sessions.length}</p>
        </div>

        <div className="card">
          <h2>Upcoming Sessions</h2>
          <p>{upcoming}</p>
        </div>

        <div className="card">
          <h2>Completed Sessions</h2>
          <p>{completed}</p>
        </div>
      </div>

      <h2 className="section-title">Session Details</h2>

      <div className="session-grid">
        {sessions.map((session) => (
          <div className="session-card" key={session.id}>
            <h3>{session.title}</h3>
            <p>Date: {session.date}</p>
            <span
              className={`status ${
                session.status === "Upcoming"
                  ? "upcoming"
                  : "completed"
              }`}
            >
              {session.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

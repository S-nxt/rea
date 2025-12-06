import React from "react";

export default function Services() {
  const serviceStyle = {
    marginBottom: "30px",
    padding: "30px",
    backgroundColor: "#4b497dff",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(17, 54, 177, 0.3)",
  };

  const headingStyle = {
    marginBottom: "15px",
    color: "#ffd700",
  };

  return (
    <div style={{ minHeight: "100vh", padding: "50px", backgroundColor: "#111", color: "#fff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px", fontSize: "32px" }}>
        Our Services
      </h1>

      <div style={serviceStyle}>
        <h2 style={headingStyle}>Web Development</h2>
        <p>Build responsive, fast, and modern websites using React, Tailwind, and Node.</p>
      </div>

      <div style={serviceStyle}>
        <h2 style={headingStyle}>Mobile App Development</h2>
        <p>Create cross-platform mobile apps with clean UI & seamless performance.</p>
      </div>

      <div style={serviceStyle}>
        <h2 style={headingStyle}>Backend & API</h2>
        <p>Design secure and scalable APIs using Node.js, Express, or ASP.NET Core.</p>
      </div>

      <p style={{ textAlign: "center", marginTop: "50px", color: "#aaa" }}>
        And many more services to help your business grow!
      </p>
    </div>
  );
}

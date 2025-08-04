import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Georgia', serif;
          background: #fdfbf7;
          color: #161513;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          border-bottom: 1px solid #ccc;
          background: #fff;
          color: #161513; /* ✅ Ensures nav text is dark */
        }

        .nav-left {
          font-size: 1.6rem;
           colot:inherit;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-center {
          display: flex;
          gap: 24px;
          font-size: 1rem;
        }
        .nav-right {
          display: flex;
          gap: 14px;
        }
        .btn {
          padding: 8px 18px;
          border: 1px solid #161513;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease-in-out;
        }
        .btn:hover {
          background: #f0f0f0;
          box-shadow: 8px 6px 2px black;
        }
        .btn-start {
          background: #00a82d;
          border: 1px solid #161513;
          border-radius: 4px;
          text-decoration: none;
          padding: 8px 18px;
          color: #fff;
          border: none;
  
        }
        .btn-start:hover {
          background: #008f26;
          box-shadow: 8px 6px 2px black;
          transform: translateY(-1px);

        }
        .hero {
          text-align: center;
          padding: 80px 20px 40px 20px;
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .highlight {
          color: #00a82d;
        }
        .hero p {
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 40px auto;
        }
        .cta-btn {
          background: #00a82d;
          color: #fff;
          padding: 14px 36px;
          font-size: 1.1rem;
          border: none;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          border: 1px solid #161513;
          transition: all 0.2s ease-in-out;
          display: inline-block;
          margin-bottom: 20px;       }
        .cta-btn:hover {
          background: #008f26;
          box-shadow: 8px 6px 2px black;
          transform: translateY(-2px);
        }
        .login-text {
          margin-top: 20px;
          font-size: 0.95rem;
        }
        .login-text a {
          color: #161513;
          text-decoration: underline;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          padding: 20px;
          text-align: center;
          transition: box-shadow 0.3s ease-in-out;
          cursor: pointer;
        }
        .card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }
        .card h3 {
          margin: 10px 0;
        }
        .features {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
          max-width: 900px;
          margin: 60px auto 40px auto;
          padding: 0 20px;
        }
        .feature {
          text-align: center;
          width: 150px;
        }
        .feature-icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        @media(max-width: 768px) {
          .navbar {
            flex-direction: column;
            gap: 12px;
            padding: 20px;
          }
          .nav-center {
            flex-direction: column;
            gap: 12px;
          }
          .hero h1 {
            font-size: 2.2rem;
          }
          .features {
            gap: 20px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-left"><span>Evernote</span></div>
        <div className="nav-center">
        </div>
        <div className="nav-right">
          <Link to="/login" className="btn">Log in</Link>
          <Link to="/signup" className="btn btn-start">Start for free</Link>
        </div>
      </nav>

      <main className="hero">
        <h1>What will you <span className="highlight">achieve</span> today?</h1>
        <p>Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</p>
        <Link to="/signup" className="cta-btn">Get Evernote free</Link>
        <p className="login-text">Already have an account? <Link to="/login">Log in</Link></p>
      </main>

      <section className="cards">
        <div className="card">
          <h3>Wiki</h3>
          <p>Organize all your knowledge.</p>
        </div>
        <div className="card">
          <h3>Planner</h3>
          <p>Plan tasks and days easily.</p>
        </div>
        <div className="card">
          <h3>Docs</h3>
          <p>Write, share and collaborate.</p>
        </div>
        <div className="card">
          <h3>Class Notes</h3>
          <p>Keep your study notes tidy.</p>
        </div>
        <div className="card">
          <h3>Research</h3>
          <p>Collect and analyze insights.</p>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">🌍</div>
          <p>Work anywhere</p>
        </div>
        <div className="feature">
          <div className="feature-icon">📌</div>
          <p>Remember everything</p>
        </div>
        <div className="feature">
          <div className="feature-icon">✅</div>
          <p>Turn to-do into done</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔍</div>
          <p>Find things fast</p>
        </div>
      </section>
    </>
  );
}

export default LandingPage;

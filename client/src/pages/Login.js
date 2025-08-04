import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import splash from "../assets/splash.webp"; // ✅ your image

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in user:", userCredential.user);
      navigate("/profile");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>Welcome Back 👋</h1>
        <p>Log in and keep your notes organized.</p>
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">Log In</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      <div className="auth-right">
        <img src={splash} alt="Splash" />
      </div>
    </div>
  );
}

export default Login;

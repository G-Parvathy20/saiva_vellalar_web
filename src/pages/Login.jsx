import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  // Email/Mobile validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobilePattern = /^[0-9]{10}$/;

  const validateForm = () => {
    const newErrors = {};

    // Validate Email/Mobile
    if (!email.trim()) {
      newErrors.email = "Email or Mobile Number is required";
    } else if (!emailPattern.test(email) && !mobilePattern.test(email.replace(/\D/g, ""))) {
      newErrors.email = "Enter a valid email or 10-digit mobile number";
    }

    // Validate Password
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with actual API call to your backend
      // Example: const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
      
      // Simulated API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulated validation - replace with real backend response
      if (email === "test@example.com" && password === "password123") {
        // Extract username from email
        const username = email.split("@")[0];
        
        // Use AuthContext to login
        login(email, username);

        // Redirect to Home
        navigate("/");
      } else {
        setGeneralError("Invalid email/mobile or password. Please try again.");
      }
    } catch (error) {
      setGeneralError("An error occurred. Please try again later.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <p className="login-subtitle">Access your account securely</p>

        {generalError && <div className="error-banner">{generalError}</div>}

        <form onSubmit={handleSubmit} noValidate>
          {/* Email/Mobile Field */}
          <div className="form-group">
            <label htmlFor="email">Email or Mobile Number</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email or 10-digit mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "input-error" : ""}
              disabled={loading}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "input-error" : ""}
              disabled={loading}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Sign-up Link */}
        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign up here</a>
        </div>

        {/* Demo Credentials Note */}
        <div className="demo-note">
          <small>Demo: Use email: test@example.com | password: password123</small>
        </div>
      </div>
    </div>
  );
};

export default Login;

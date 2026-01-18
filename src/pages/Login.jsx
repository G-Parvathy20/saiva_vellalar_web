import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  "../styles/Login.css";

function App() {
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [storedUser, setStoredUser] = useState(null);

  const [message, setMessage] = useState("");

  // Redirect to home when successfully logged in
  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 1500); // Delay for 1.5 seconds to show success message
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn, navigate]);

  
  function handleSignup() {
    if (username === "" || password === "") {
      setMessage("All fields are required ");
      return;
    }

    setStoredUser({ username, password });
    setMessage("Signup successful..! Please login");
    setUsername("");
    setPassword("");
    setIsLoginPage(true);
  }

  
  function handleLogin() {
    if (
      storedUser &&
      username === storedUser.username &&
      password === storedUser.password
    ) {
      setIsLoggedIn(true);
      setMessage("Login Success ");
    } else {
      setMessage("Invalid Username or Password ");
    }
  }

  
  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setMessage("Logged out successfully ");
  }

  return (
    <div className="app-container">
      <div className="login-card">
        {!isLoggedIn ? (
          <>
            <h2>{isLoginPage ? "Login" : "Sign Up"}</h2>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {isLoginPage ? (
              <>
                <button style={{ cursor: "pointer", margin: "10px 0" }} onClick={handleLogin}>Login</button>
                <p className="switch">
                  New user?
                  <span style={{ cursor: "pointer", color: "#667eea" }} onClick={() => setIsLoginPage(false)}>
                    {" "}
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button style={{ cursor: "pointer", margin: "10px 0" }} onClick={handleSignup}>Sign Up</button>
                <p className="switch">
                  Already have an account?
                  <span style={{ cursor: "pointer", color: "#667eea" }} onClick={() => setIsLoginPage(true)}>
                    {" "}
                    Login
                  </span>
                </p>
              </>
            )}
          </>
        ) : (
          <>
            <h2>Welcome, {storedUser.username} 😊</h2>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        <p className="msg">{message}</p>
      </div>
    </div>
  );
}

export default App;
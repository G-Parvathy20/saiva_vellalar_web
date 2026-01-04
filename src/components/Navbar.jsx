import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img src='logo.png' alt="Saiva Vellalar Logo" style={styles.logo} />
      </div>

      {/* Menu */}
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About Us</Link></li>
        <li><Link to="/services" style={styles.link}>Our Services</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact Us</Link></li>
        <li><Link to="/feedback" style={styles.link}>Feedback</Link></li>
        {user && (
          <li style={styles.userProfile}>
            <span style={styles.username}>{user.username}</span>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    backgroundColor: "#fde588ff",
    height: "80px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "200px",
    width: "auto",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "50px",
    alignItems: "center",
    marginRight: "100px",
    paddingRight: "250px",
  },
  link: {
    textDecoration: "none",
    color: "#d32f2f",    
    fontSize: "18px",
    fontWeight: "bold",
  },
  userProfile: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  username: {
    fontSize: "16px",
    color: "#333",
    fontWeight: "500",
    padding: "0 10px",
  },
  logoutBtn: {
    background: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  loginLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#667eea",
    padding: "8px 16px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  userEmail: {
    fontSize: "14px",
    color: "#333",
    maxWidth: "150px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};


export default Navbar;

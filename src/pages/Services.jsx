import React from "react";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1>Our Services</h1>
        <ul style={styles.list}>
          <li>✔ Community-based matchmaking</li>
          <li>✔ Verified matrimonial profiles</li>
          <li>✔ Secure and private platform</li>
          <li>✔ Easy registration process</li>
        </ul>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    fontSize: "18px",
    lineHeight: "2",
  },
};

export default Services;

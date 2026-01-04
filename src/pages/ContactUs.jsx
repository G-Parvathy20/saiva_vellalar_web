import React from "react";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1>Contact Us</h1>
        <p>Email: saivavellalarmatrimony@gmail.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
};

export default ContactUs;

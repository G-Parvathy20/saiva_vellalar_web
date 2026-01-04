import React from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section id="about" style={styles.section}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.aboutText}>
          திருநெல்வேலி மாவட்ட சைவ வேளாளர் சமூகத்திற்காக மட்டுமே
          பாரம்பரியமும், நம்பகத்தன்மையும் கொண்ட திருமண சேவை மையமாக
          எங்கள் சேவை கடந்த ஆறு ஆண்டுகளாக சிறப்பாக செயல்பட்டு வருகிறது.

          இதுவரை 1200-க்கும் மேற்பட்ட திருமணங்களை வெற்றிகரமாக நடத்தி முடித்துள்ளோம்.
          மேலும் எதிர்காலத்தில் 2000 திருமணங்களை நடத்தும் நோக்கில்
          எங்கள் சேவைகளை தொடர்ந்து மேம்படுத்தி வருகிறோம்.

          சமூக மதிப்புகள், குடும்ப ஒற்றுமை மற்றும் பரஸ்பர புரிதல் ஆகியவற்றை
          முக்கியமாகக் கொண்டு சரியான வாழ்க்கை துணையை இணைப்பதே
          எங்கள் பிரதான குறிக்கோள்.
        </p>
      </section>
    </>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  section: {
  padding: "80px 10%",
  backgroundColor: "#ffffff",
},

heading: {
  fontSize: "34px",
  fontWeight: "700",
  textAlign: "start",   // ✅ ONLY heading center
  marginBottom: "30px",
  color: "#000",
},

aboutText: {
  fontSize: "18px",
  lineHeight: "2",
  color: "#333",
  textAlign: "justify",  // ✅ THIS FIXES THE ISSUE
  maxWidth: "1000px",    // ✅ readability
  margin: "0 auto",      // ✅ center container, not text
},
};

export default AboutUs;

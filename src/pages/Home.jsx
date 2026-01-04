import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          ...styles.hero,
          backgroundImage: "url('/bgimg.jpeg')",
        }}
      >
        <div style={styles.overlay}>
          <h1 style={styles.title}>சைவ வேளாளர் திருமண சேவை</h1>
          <p style={styles.subtitle}>
            திருநெல்வேலி மாவட்ட சைவ வேளாளர் சமூகத்திற்கான  
            பாரம்பரியமும் நம்பகத்தன்மையும் கொண்ட திருமண சேவை மையம்
          </p>
          <button style={{
            marginTop: "25px",
            padding: "12px 30px",
            fontSize: "18px",
            backgroundColor: "#fde588ff",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Register Now
          </button>

        </div>
      </section>

      {/* ABOUT US */}
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

      {/* OUR SERVICES */}
      <section id="services" style={styles.servicesSection}>
        <h2 style={styles.heading}>Our Services</h2>

        {/* Row 1 - 3 Cards */}
        <div style={styles.servicesRow}>
          <div style={styles.serviceCard}>
            <span style={styles.icon}>📝</span>
            <h3 style={styles.cardTitle}>மணமகன் / மணமகள் பதிவு</h3>
            <p style={styles.cardText}>
              சரிபார்க்கப்பட்ட மணமகன் மற்றும் மணமகள் பதிவுகள்.
            </p>
          </div>

          <div style={styles.serviceCard}>
            <span style={styles.icon}>📜</span>
            <h3 style={styles.cardTitle}>ஜாதக பொருத்தம்</h3>
            <p style={styles.cardText}>
              பாரம்பரிய முறையில் சரியான ஜாதக பொருத்தம்.
            </p>
          </div>

          <div style={styles.serviceCard}>
            <span style={styles.icon}>👨‍👩‍👧</span>
            <h3 style={styles.cardTitle}>குடும்ப விவர சரிபார்ப்பு</h3>
            <p style={styles.cardText}>
              முழுமையான குடும்ப விவர சரிபார்ப்பு.
            </p>
          </div>
        </div>

        {/* Row 2 - 2 Cards Center */}
        <div style={styles.servicesRowCenter}>
          <div style={styles.serviceCard}>
            <span style={styles.icon}>🤝</span>
            <h3 style={styles.cardTitle}>நம்பகமான சேவை</h3>
            <p style={styles.cardText}>
              100% நம்பகத்தன்மையுடன் வழங்கப்படும் சேவை.
            </p>
          </div>

          <div style={styles.serviceCard}>
            <span style={styles.icon}>💬</span>
            <h3 style={styles.cardTitle}>நேரடி ஆலோசனை</h3>
            <p style={styles.cardText}>
              நேரடி ஆலோசனை மற்றும் வழிகாட்டல்.
            </p>
          </div>
        </div>
      </section>


      {/* CONTACT US */}
      <section id="contact" style={styles.contactWrapper}>
        <h2 style={styles.contactHeading}>Contact Us</h2>

        <div style={styles.contactContainer}>
          {/* LEFT SIDE - DETAILS */}
          <div style={styles.contactLeft}>
            <p style={styles.contactDesc}>
              உங்களுக்கு தேவையான தகவல்களுக்கு எங்களை தொடர்பு கொள்ளுங்கள்.
            </p>

            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>📍</span>
              <div>
                <h4>Address</h4>
                <p>திருநெல்வேலி</p>
              </div>
            </div>

            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>📞</span>
              <div>
                <h4>Phone</h4>
                <p>9942888117 / 9629287179</p>
              </div>
            </div>

            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>⏰</span>
              <div>
                <h4>Working Hours</h4>
                <p>காலை 9 மணி – மாலை 7 மணி</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div style={styles.contactRight}>
            <h3>Send Message</h3>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Email" style={styles.input} />
            <textarea placeholder="Your Message" style={styles.textarea}></textarea>
            <button style={styles.sendBtn}>Send</button>
          </div>
        </div>
      </section>


      {/* FOOTER */}
<footer style={styles.footer}>
  <div style={styles.footerContainer}>

    {/* Left */}
    <div style={styles.footerCol}>
      <h3 style={styles.footerTitle}>சைவ வேளாளர் திருமண சேவை</h3>
      <p style={styles.footerText}>
        திருநெல்வேலி மாவட்ட சைவ வேளாளர் சமூகத்திற்கான  
        நம்பகமான மற்றும் பாரம்பரிய திருமண சேவை மையம்.
      </p>
    </div>

    {/* Middle */}
    <div style={styles.footerCol}>
      <h4 style={styles.footerHeading}>Quick Links</h4>
      <ul style={styles.footerList}>
        <li><a href="#home" style={styles.footerLink}>Home</a></li>
        <li><a href="#about" style={styles.footerLink}>About Us</a></li>
        <li><a href="#services" style={styles.footerLink}>Our Services</a></li>
        <li><a href="#contact" style={styles.footerLink}>Contact</a></li>
        <li><a href="#feedback" style={styles.footerLink}>Feedback</a></li>
      </ul>
    </div>

    {/* Right */}
    <div style={styles.footerCol}>
      <h4 style={styles.footerHeading}>Contact</h4>
      <p style={styles.footerText}>📍 திருநெல்வேலி</p>
      <p style={styles.footerText}>📞 9942888117 / 9629287179</p>
      <p style={styles.footerText}>⏰ காலை 9 – மாலை 7</p>
    </div>

  </div>

  {/* Bottom */}
  <div style={styles.footerBottom}>
    © {new Date().getFullYear()} Saiva Vellalar Matrimonial Service.  
    All Rights Reserved.
  </div>
</footer>

    </>
  );
};

const styles = {
  hero: {
    height: "70vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "20px",
    maxWidth: "900px",
    marginTop: "15px",
    lineHeight: "1.6",
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
  contactWrapper: {
  padding: "90px 8%",
  background: "#fde588ff",
  color: "#000",
},
contactHeading: {
  fontSize: "32px",
  marginBottom: "20px",
  color: "#000",
},
contactContainer: {
  display: "flex",
  gap: "50px",
  marginTop: "50px",
  justifyContent: "center",
  alignItems: "stretch",
  flexWrap: "wrap",
},

contactLeft: {
  flex: 1,
  minWidth: "280px",
},

contactDesc: {
  marginBottom: "30px",
  color: "#000",
  fontSize: "17px",
},

infoItem: {
  display: "flex",
  gap: "16px",
  alignItems: "center",
  marginBottom: "25px",
},

infoIcon: {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  color: "#1b5e20",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
},

contactRight: {
  flex: 1,
  minWidth: "300px",
  backgroundColor: "#000",
  padding: "35px",
  borderRadius: "16px",
  color: "#fff",
  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
},

input: {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
},

textarea: {
  width: "100%",
  height: "110px",
  padding: "12px",
  marginBottom: "20px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
},

sendBtn: {
  width: "100%",
  padding: "12px",
  backgroundColor: "#fde588ff",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
},
  sectionAlt: {
    padding: "70px 15%",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#333",
  },
  servicesSection: {
  padding: "80px 10%",
  backgroundColor: "#f9fafb",
},

servicesRow: {
  display: "flex",
  justifyContent: "space-between",
  gap: "30px",
  marginTop: "40px",
  flexWrap: "wrap",
},

servicesRowCenter: {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginTop: "40px",
  flexWrap: "wrap",
},

serviceCard: {
  width: "300px",
  backgroundColor: "#ffffff",
  padding: "35px 25px",
  borderRadius: "18px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  transition: "transform 0.3s ease",
},

icon: {
  fontSize: "42px",
  marginBottom: "18px",
},

cardTitle: {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "12px",
  color: "#1b5e20",
},

cardText: {
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#444",
},
footer: {
  backgroundColor: "#1b5e20",
  color: "#ffffff",
  padding: "60px 10% 20px",
},

footerContainer: {
  display: "flex",
  justifyContent: "space-between",
  gap: "40px",
  flexWrap: "wrap",
},

footerCol: {
  flex: "1",
  minWidth: "250px",
},

footerTitle: {
  fontSize: "22px",
  marginBottom: "15px",
  color: "#fde588ff",
},

footerHeading: {
  fontSize: "18px",
  marginBottom: "15px",
  color: "#fde588ff",
},

footerText: {
  fontSize: "15px",
  lineHeight: "1.8",
  color: "#e0e0e0",
},

footerList: {
  listStyle: "none",
  padding: 0,
  margin: 0,
},

footerLink: {
  display: "block",
  color: "#e0e0e0",
  textDecoration: "none",
  marginBottom: "10px",
  fontSize: "15px",
},

footerBottom: {
  marginTop: "40px",
  paddingTop: "15px",
  borderTop: "1px solid rgba(255,255,255,0.2)",
  textAlign: "center",
  fontSize: "14px",
  color: "#ccc",
},
};

export default Home;

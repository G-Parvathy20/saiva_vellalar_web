import React, { useState } from "react";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
    alert("Thank you for your feedback!");
    setRating(0);
    setFeedback("");
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.title}>Simple Feedback Form</h2>
        <p>How was your experience?</p>

        <div style={styles.stars}>
          {[5, 4, 3, 2, 1].map((star) => (
            <React.Fragment key={star}>
              <input
                type="radio"
                id={`star${star}`}
                name="rating"
                value={star}
                checked={rating === star}
                onChange={() => setRating(star)}
                style={{ display: "none" }}
              />
              <label
                htmlFor={`star${star}`}
                style={{
                  fontSize: "30px",
                  color: rating >= star ? "#f5b301" : "#ccc",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  margin: "0 2px",
                }}
              >
                &#9733;
              </label>
            </React.Fragment>
          ))}
        </div>

        <textarea
          placeholder="Share your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          style={styles.textarea}
        />

        <button onClick={handleSubmit} style={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
};

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#d0d8de",
  },
  container: {
    backgroundColor: "#fff",
    padding: "30px 40px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "300px",
  },
  title: {
    marginBottom: "20px",
    color: "#1f2a38",
  },
  stars: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    flexDirection: "row-reverse",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    resize: "none",
    marginBottom: "20px",
    fontSize: "14px",
    height: "80px",
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#7da7d9",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};

export default FeedbackForm;

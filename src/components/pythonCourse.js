import React from "react";
import { Link } from "react-router-dom";

const PythonCourse = () => {
    console.log("Python component rendered"); // For debugging

    const styles = {
      container: {
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
      },
      headerContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "black",
        color: "white",
      },
      header: {
        fontSize: "36px",
        fontWeight: "bold",
        margin: 0,
      },
      nav: {
        display: "flex",
      },
      navList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        gap: "20px",
      },
      navItem: {
        margin: 0,
      },
      navLink: {
        textDecoration: "none",
        color: "white",
        padding: "10px 20px",
        transition: "background-color 0.3s ease",
      },
      courseTitle: {
        textAlign: "center", // Center the heading
        fontSize: "48px",
        fontWeight: "bold",
        margin: "40px 0 20px 0", // Add space around the heading
      },
      mainContent: {
        display: "flex",
        justifyContent: "space-between",  // Space between video and details
        padding: "20px",
        alignItems: "flex-start",
      },
      videoContainer: {
        width: "50%", // Adjusts the width of the video side
        textAlign: "left",
      },
      video: {
        width: "100%", 
        height: "400px", 
        border: "none",
      },
      materialButtonContainer: {
        marginTop: "20px", // Gap between content and button
        textAlign: "left", // Align button to the right
      },
      materialButton: {
        padding: "8px 16px", // Reduced button size
        backgroundColor: "black",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: "14px", // Reduced font size
        textDecoration: "none",
      },
      details: {
        width: "50%", 
        textAlign: "left",
        paddingLeft: "20px", 
      },
      subheading: {
        fontSize: "18px",
        fontWeight: "normal",
        marginBottom: "20px",
      },
      list: {
        fontSize: "16px",
        lineHeight: "1.5",
        marginBottom: "20px",
      },
    };

    return (
      <div style={styles.container}>
        <header style={styles.headerContainer}>
          <h1 style={styles.header}>BORCELLE</h1>
          <nav style={styles.nav}>
            <ul style={styles.navList}>
              <li style={styles.navItem}>
                <Link to="/home" style={styles.navLink}>Home</Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/workshops" style={styles.navLink}>Workshops</Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/login" style={styles.navLink}>Login</Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/aboutus" style={styles.navLink}>About Us</Link>
              </li>
            </ul>
          </nav>
        </header>

        <h2 style={styles.courseTitle}>Python Course</h2>

        <div style={styles.mainContent}>
          <div style={styles.videoContainer}>
            <iframe
              style={styles.video}
              src="https://www.youtube.com/embed/_uQrJ0TkZlc"
              title="Python Course Video"
              allowFullScreen
            ></iframe>
          </div>

          <div style={styles.details}>
            <h3 style={styles.subheading}>What you'll learn</h3>
            <ul style={styles.list}>
              <li>Learn Python - the most popular programming language for Data Science and Software Development.</li>
              <li>Apply Python programming logic: Variables, Data Structures, Branching, Loops, Functions, Objects & Classes.</li>
              <li>Demonstrate proficiency in libraries like Pandas & Numpy, and develop code using Jupyter Notebooks.</li>
              <li>Access and web scrape data using APIs and Python libraries like Beautiful Soup.</li>
            </ul>
            {/* Material Button Container positioned below the list */}
            <div style={styles.materialButtonContainer}>
              <a
                href="/python.pdf" 
                download="PythonCourseMaterials.pdf"
                style={styles.materialButton}
              >
                Download Python Material
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PythonCourse;

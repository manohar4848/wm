import React from "react";
import pythonLogo from "./image5.png";
import { Link } from "react-router-dom";

const PythonCourse = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0 ,
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
    content: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0 60px  0", 
      marginTop: "0px",    
      alignItems: "center",
      gap: "20px",
    },
    details: {
      width: "60%",
      textAlign: "left",
    },
    heading: {
      fontSize: "48px", 
      fontWeight: "bold",
      textAlign: "left",
      marginBottom: "20px",
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
    price: {
      fontSize: "36px", 
      color: "#ff7a00", 
      fontWeight: "bold",
      marginTop: "20px",
    },
    button: {
      backgroundColor: "black", 
      color: "#fff",
      padding: "15px 40px", 
      textDecoration: "none",
      borderRadius: "5px",
      fontSize: "18px",
      fontWeight: "bold",
      marginTop: "20px",
      display: "inline-block",
    },
    logo: {
      width: "500px",
      height: "auto",
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

      <div style={styles.content}>
        <div style={styles.details}>
          <h2 style={styles.heading}>PYTHON</h2>
          <h3 style={styles.subheading}>What you'll learn</h3>
          <ul style={styles.list}>
            <li>Learn Python - the most popular programming language for Data Science and Software Development.</li>
            <li>Apply Python programming logic: Variables, Data Structures, Branching, Loops, Functions, Objects & Classes.</li>
            <li>Demonstrate proficiency in libraries like Pandas & Numpy, and develop code using Jupyter Notebooks.</li>
            <li>Access and web scrape data using APIs and Python libraries like Beautiful Soup.</li>
          </ul>
          <a href="/register" style={styles.button}>Register now</a>
        </div>
        <div>
          <img src={pythonLogo} alt="Python Logo" style={styles.logo} />
        </div>
      </div>
    </div>
  );
};

export default PythonCourse;

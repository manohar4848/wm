import React, { useState } from 'react';
import { Link } from "react-router-dom";
import backgroundImage from './image7.jpg'; 

function StudentWorkshopRegistration() {
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [selectedWorkshop, setSelectedWorkshop] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      studentName,
      email,
      collegeName,
      selectedWorkshop,
    };
    console.log('Form Data:', formData);
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      backgroundImage: `url(${backgroundImage})`, // Add background image
      backgroundSize: 'cover', // Make the background cover the whole page
      backgroundPosition: 'center', // Center the background image
      minHeight: '100vh', // Ensure it covers the entire viewport height
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
      display: 'flex',
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      gap: '20px',
    },
    navItem: {
      margin: 0,
    },
    navLink: {
      textDecoration: 'none',
      color: 'white',
      padding: '10px 20px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      borderRadius: '5px',
    },
    formContainer: {
      marginTop: '60px',
      display: 'flex',
      justifyContent: 'center',
    },
    formBox: {
      padding: '30px',
      width: '500px',
      border: '2px solid rgba(0, 0, 0, 0.5)',
      borderRadius: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Make the background slightly transparent
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    inputLabel: {
      display: 'block',
      marginBottom: '5px',
    },
    inputField: {
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    buttonStyle: {
      padding: '10px 20px',
      backgroundColor: 'black',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      width: '100%', // Make the button span the width of the form
      borderRadius: '5px',
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

      <div style={styles.formContainer}>
        <div style={styles.formBox}>
        <h1>Register for Workshop</h1>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="studentName" style={styles.inputLabel}>Student Name</label>
              <input
                type="text"
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
                style={styles.inputField}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.inputLabel}>Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.inputField}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="collegeName" style={styles.inputLabel}>College Name</label>
              <input
                type="text"
                id="collegeName"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                required
                style={styles.inputField}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="workshop" style={styles.inputLabel}>Select Workshop</label>
              <select
                id="workshop"
                value={selectedWorkshop}
                onChange={(e) => setSelectedWorkshop(e.target.value)}
                required
                style={styles.inputField}
              >
                <option value="">Select a workshop</option>
                <option value="Workshop 1">Python</option>
                <option value="Workshop 2">Java</option>
                <option value="Workshop 3">C</option>
              </select>
            </div>
            <Link to='/pythoncourse'>
            <button type="submit" style={styles.buttonStyle}>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentWorkshopRegistration;

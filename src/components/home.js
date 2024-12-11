import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './image8.jpg';  

function Home() {
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

    // Content section styles
    contentContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '60px 20px',
    },
    textContainer: {
      flex: 1,
      textAlign: 'left',
      paddingRight: '30px',
    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#000',
    },
    paragraph: {
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '30px',
      color: '#333',
    },
    buttonContainer: {
      marginBottom: '15px', // Adds spacing between the buttons
    },
    button: {
      padding: '10px 20px',
      backgroundColor: 'black',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      display: 'block',
      width: '200px',
      margin: '0 auto', // Centering the buttons horizontally
      textDecoration: 'none', // Ensure button text has no underline
    }, 
    imageContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width : '500px',
      height: '500px',     // Maintain aspect ratio
      borderRadius: '10px',
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

      <div style={styles.contentContainer}>
        <div style={styles.textContainer}>
          <h2 style={styles.title}>ONLINE WORKSHOP</h2>
          <p style={styles.paragraph}>
            Learn practical skills like financial management, marketing, and business planning.
          </p>
          <div style={styles.buttonContainer}>
          <Link to="/workshops" style={{ textDecoration: 'none' }}> {/* Remove underline from link */}
            <button style={styles.button}>View More</button>
          </Link>
        </div>
        </div>
        <div style={styles.imageContainer}>
          <img src={image1} alt="Workshop materials" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default Home;

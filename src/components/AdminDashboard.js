import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './image8.jpg';  

function AdminHome() {
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
      marginBottom: '15px', 
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
      margin: '0 auto', 
      textDecoration: 'none', 
    }, 
    imageContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width : '500px',
      height: '500px',     
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
            <Link to="/admin" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/admin/workshops" style={styles.navLink}>Manage Workshops</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/admin/registeration" style={styles.navLink}>Manage Registrations</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/admin/materials" style={styles.navLink}>Upload Materials</Link>
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
          <Link to="/admin/workshops" style={{ textDecoration: 'none' }}> {/* Remove underline from link */}
            <button style={styles.button}>Workshop</button>
          </Link>
        </div>

        <div style={styles.buttonContainer}>
          <Link to="/admin/registeration" style={{ textDecoration: 'none' }}> {/* Remove underline from link */}
            <button style={styles.button}>Registrations</button>
          </Link>
        </div>

        <div style={styles.buttonContainer}>
          <Link to="/admin/materials" style={{ textDecoration: 'none' }}> {/* Remove underline from link */}
            <button style={styles.button}>Materials</button>
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

export default AdminHome;

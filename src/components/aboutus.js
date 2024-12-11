import React from 'react';
import aboutImage from './image9.jpg'; // existing image

function AboutUs() {
  // CSS styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,  
    },
    subContainer: {
      backgroundColor: '#a405fa',
      marginTop: '50px',
      marginBottom: '70px',
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'black',
      color: 'white',
    },
    header: {
      fontSize: '36px',
      fontWeight: 'bold',
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
      transition: 'background-color 0.3s ease',
    },
    aboutContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '40px 20px',
     
      
    },
    image: {
      width: '300px',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '50%',
      marginLeft: '250px', 
      marginTop: '20px',
    },
    textContainer: {
      textAlign: 'left',
      padding: '20px',
      maxWidth: '500px',
    },
    aboutTitle: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.headerContainer}>
        <h1 style={styles.header}>BORCELLE</h1>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <a href="/home" style={styles.navLink}>Home</a>
            </li>
            <li style={styles.navItem}>
              <a href="/workshops" style={styles.navLink}>Workshops</a>
            </li>
            <li style={styles.navItem}>
              <a href="/login" style={styles.navLink}>Login</a>
            </li>
            <li style={styles.navItem}>
              <a href="/aboutus" style={styles.navLink}>About Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <div style={styles.subContainer}>
      <div style={styles.aboutContainer}>
        <img src={aboutImage} alt="About Us" style={styles.image} />
        <div style={styles.textContainer}>
          <h1 style={styles.aboutTitle}>About Us</h1>
          <p>At Lernit, we are dedicated to delivering innovative and sustainable solutions that enhance the quality of life for our community.</p>
          <p>Since our founding in 2024, we've grown from a small startup into a leading [industry] provider, driven by our core values of integrity, creativity, and excellence.</p>
          <p>Our talented team, led by [Founder's Name] and supported by experts in [relevant fields], is committed to making a positive impact through our products and services.</p>
          <p>We're proud of our achievements, including [mention key awards or recognitions], and we invite you to learn more about us, explore our offerings, and connect with us to see how we can collaborate to achieve great things together.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;

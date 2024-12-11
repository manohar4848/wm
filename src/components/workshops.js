import React from 'react';
import pythonLogo from "./image5.png"; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css';

const Workshops = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
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
    navLinkHover: {
      backgroundColor: '#555',
    },
    content: {
      textAlign: 'center',
      padding: '40px 20px',
    },
    cardButton: {
      backgroundColor: 'black',
      color: 'white',
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

      <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center' }}>WORKSHOPS</h1>

        <div className="container" style={{ maxWidth: '80%' }}>
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="card" style={{ width: '20rem' }}>
                {/* Use pythonLogo here without quotes */}
                <img src={pythonLogo} className="card-img-top" alt="Workshop Image" />
                <div className="card-body">
                  <h5 className="card-title">Python</h5>
                  <p className="card-text">
                    Last Day: 20-10-2024
                  </p>
                  <a href="/python" className="btn" style={styles.cardButton}>
                    Register
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Workshop Image" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="/register" className="btn" style={styles.cardButton}>
                    Register
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Workshop Image" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="/register" className="btn" style={styles.cardButton}>
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Workshop Image" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="/register" className="btn" style={styles.cardButton}>
                    Register
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Workshop Image" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="/register" className="btn" style={styles.cardButton}>
                    Register
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Workshop Image" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="/register" className="btn" style={styles.cardButton}>
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import backgroundImage from './image2.jpg'; 

const RegistrationManager = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get('/api/registrations');
      setRegistrations(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching registrations', error);
      setLoading(false);
    }
  };

  const handleApproval = async (id, status) => {
    try {
      await axios.put(`/api/registrations/${id}`, { status });
      fetchRegistrations(); 
    } catch (error) {
      console.error('Error updating registration status', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    fontSize: '18px',
    textAlign: 'left',
  };

  const thTdStyles = {
    padding: '12px 15px',
    border: '1px solid #ddd',
  };

  const thStyles = {
    ...thTdStyles,
    backgroundColor: '#f4f4f4',
  };

  const evenRowStyles = {
    backgroundColor: '#f9f9f9',
  };

  const buttonStyles = {
    padding: '6px 12px',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
  };

  const approveButtonStyles = {
    ...buttonStyles,
    backgroundColor: 'green',
  };

  const denyButtonStyles = {
    ...buttonStyles,
    backgroundColor: 'red',
    marginLeft: '10px',
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', 
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

      <div style={styles.content}>
        <h1>Registration Manager</h1>
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>Name</th>
              <th style={thStyles}>Workshop</th>
              <th style={thStyles}>Status</th>
              <th style={thStyles}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg, index) => (
              <tr key={reg.id} style={index % 2 === 0 ? evenRowStyles : {}}>
                <td style={thTdStyles}>{reg.user.name}</td>
                <td style={thTdStyles}>{reg.workshop.title}</td>
                <td style={thTdStyles}>{reg.status}</td>
                <td style={thTdStyles}>
                  {reg.status === 'pending' ? (
                    <>
                      <button
                        onClick={() => handleApproval(reg.id, 'approved')}
                        style={approveButtonStyles}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleApproval(reg.id, 'denied')}
                        style={denyButtonStyles}
                      >
                        Deny
                      </button>
                    </>
                  ) : (
                    <span>{reg.status === 'approved' ? 'Approved' : 'Denied'}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationManager;

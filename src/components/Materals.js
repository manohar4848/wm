import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import backgroundImage from './image4.jpg'; // Import your background image

const UploadMaterials = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    setUploading(true);

    try {
      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
      setFile(null);
    } catch (error) {
      console.error('Error uploading file', error);
      alert('File upload failed');
    } finally {
      setUploading(false);
    }
  };

  const styles = {
    container: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
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
      transition: 'background-color 0.3s ease'
    },
    formWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(80vh - 100px)',
    },
    formContainer: {
      maxWidth: '600px',
      width: '100%',
      padding: '40px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formHeader: {
      textAlign: 'center',
      fontSize: '24px',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      fontSize: '16px',
      marginBottom: '10px',
    },
    input: {
      padding: '15px',
      fontSize: '16px',
      width: '100%',
      marginBottom: '20px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      color: 'white',
      backgroundColor: 'black',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '100%',
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
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          <h2 style={styles.formHeader}>Upload Training Materials</h2>
          <form onSubmit={handleUpload} style={styles.form}>
            <label style={styles.label}>Select File:</label>
            <input type="file" onChange={handleFileChange} style={styles.input} />
  
            <button type="submit" style={styles.button} disabled={uploading}>
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default UploadMaterials;

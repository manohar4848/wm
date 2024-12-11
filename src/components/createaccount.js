import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from './image1.jpg';

function AccountCreation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const user = { name, email, password, dateOfBirth, role };

    try {
      const response = await fetch('http://proud-compassion-production.up.railway.app/api/users/createaccount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert('Account created successfully!');
        window.location.href = '/login';
      } else {
        const message = await response.text();
        alert(`Error: ${message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create account');
    }
  };
  
  

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

    loginContainer: {
      backgroundImage: `url(${image1})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '110vh',
      textAlign: 'center',
      padding: '20px',
    },
    formBox: {
      display: 'inline-block',
      padding: '30px',
      width: '500px',
      border: '2px solid black',
      borderRadius: '10px',
      backgroundColor: '#CD853F',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    inputGroup: {
      marginBottom: '10px',
    },
    inputLabel: {
      display: 'block',
      marginBottom: '5px',
    },
    inputField: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: 'black',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      marginBottom: '10px',
      width: '150px',
    },
    selectRole: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      marginBottom: '10px',
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
    <div style={styles.loginContainer}>
      <div style={styles.formBox}>
        <h1>Create new Account</h1>
        <a href="/login">Already Registered? Login</a>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.inputLabel}>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <label htmlFor="password" style={styles.inputLabel}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.inputField}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="confirmPassword" style={styles.inputLabel}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.inputField}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="dateOfBirth" style={styles.inputLabel}>Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
              style={styles.inputField}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="role" style={styles.inputLabel}>Select Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={styles.selectRole}
            >
              <option value="">Select a Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" style={styles.button}>Create Account</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default AccountCreation;

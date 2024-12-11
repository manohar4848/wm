import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from './image1.jpg';
import { Link } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User'); // New state for role
  const [isLoading, setIsLoading] = useState(false); // State for loading

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password, role }),
      });

      if (response.ok) {
        const redirectPath = await response.text();
        console.log('Redirect Path:', redirectPath);
        navigate(redirectPath); // Redirect based on role
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed');
    } finally {
      setIsLoading(false);
    }
  };


  const handleRegisterClick = () => {
    navigate('/createaccount');
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
    body: {
      backgroundImage: `url(${image1})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100vh',
    },
    loginContainer: {
      textAlign: 'center',
      padding: '60px',
    },
    formBox: {
      display: 'inline-block',
      padding: '30px',
      width: '500px',
      border: '2px solid rgba(0, 0, 0, 0.701)',
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
    selectField: {
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
    loadingButton: {
      backgroundColor: '#555',
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
      <div style={styles.body}>
        <div style={styles.loginContainer}>
          <div style={styles.formBox}>
            <h1>Login</h1>
            <p>Sign in to continue</p>
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
                <label htmlFor="role" style={styles.inputLabel}>Role</label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  style={styles.selectField}
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <button
                type="submit"
                style={isLoading ? { ...styles.button, ...styles.loadingButton } : styles.button}
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            <p>Or</p>
            <button onClick={handleRegisterClick} style={styles.button}>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

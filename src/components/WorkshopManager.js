import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import backgroundImage from './image3.jpg'; 

const WorkshopManager = () => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [workshopToEdit, setWorkshopToEdit] = useState({
    id: null,
    title: '',
    description: '',
    date: '',
    time: '',
    image: ''
  });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    try {
      const response = await axios.get('/api/workshops');
      setWorkshops(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching workshops', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/workshops/${id}`);
      fetchWorkshops();
    } catch (error) {
      console.error('Error deleting workshop', error);
    }
  };

  const handleEdit = (workshop) => {
    setWorkshopToEdit(workshop);
    setImagePreview(workshop.image ? `/uploads/${workshop.image}` : null); // Correct image path from backend
    setEditing(true);
  };

  const handleChange = (e) => {
    setWorkshopToEdit({ ...workshopToEdit, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    // Check if a file was selected and its type is valid
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
      
      // Validate file type
      if (validImageTypes.includes(file.type)) {
        setWorkshopToEdit({ ...workshopToEdit, image: file });
        setImagePreview(URL.createObjectURL(file)); // Create a preview for the image
      } else {
        alert('Invalid file type. Please upload an image (JPEG, PNG, GIF, WebP, SVG).');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', workshopToEdit.title);
    formData.append('description', workshopToEdit.description);
    formData.append('date', workshopToEdit.date);
    formData.append('time', workshopToEdit.time);
    if (workshopToEdit.image) {
      formData.append('image', workshopToEdit.image);
    }

    try {
      if (workshopToEdit.id) {
        // Update existing workshop
        await axios.put(`/api/workshops/${workshopToEdit.id}`, formData);
      } else {
        // Create new workshop
        await axios.post('/api/workshops', formData);
      }
      fetchWorkshops();
      setEditing(false);
      setWorkshopToEdit({ id: null, title: '', description: '', date: '', time: '', image: '' });
      setImagePreview(null);
    } catch (error) {
      console.error('Error saving workshop', error);
    }
  };

  if (loading) return <div>Loading...</div>;

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
        <h1>Workshop Manager</h1>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Time</th>
              <th style={styles.th}>Image</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {workshops.map(workshop => (
              <tr key={workshop.id}>
                <td style={styles.td}>{workshop.title}</td>
                <td style={styles.td}>{workshop.description}</td>
                <td style={styles.td}>{workshop.date}</td>
                <td style={styles.td}>{workshop.time}</td>
                <td style={styles.td}>
                  {workshop.image && <img src={`/uploads/${workshop.image}`} alt={workshop.title} style={styles.imagePreview} />}
                </td>
                <td style={styles.td}>
                  <button onClick={() => handleEdit(workshop)} style={styles.button}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(workshop.id)} style={{ ...styles.button, backgroundColor: 'red' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => handleEdit({ id: null, title: '', description: '', date: '', time: '', image: '' })} style={styles.button}>
          Add New Workshop
        </button>
        {editing && (
          <form onSubmit={handleSubmit} style={styles.form}>
            <label>Title:
              <input
                type="text"
                name="title"
                value={workshopToEdit.title}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
            <label>Description:
              <input
                type="text"
                name="description"
                value={workshopToEdit.description}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
            <label>Date:
              <input
                type="date"
                name="date"
                value={workshopToEdit.date}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
            <label>Time:
              <input
                type="time"
                name="time"
                value={workshopToEdit.time}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
            <label>Image:
              <input
                type="file"
                onChange={handleImageChange}
                style={styles.input}
                accept="image/jpeg, image/png, image/gif, image/webp, image/svg+xml" // File type restriction
              />
            </label>
            {imagePreview && <img src={imagePreview} alt="Preview" style={styles.imagePreview} />}
            <div style={styles.buttonContainer}>
              <button type="submit" style={styles.button}>Save</button>
              <button onClick={() => setEditing(false)} style={{ ...styles.button, ...styles.cancelButton }}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '0px',
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
  content: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f4f4f4',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
  },
  form: {
    padding: '20px',
    border: '1px solid #ccc',
    marginTop: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '40%',
    margin: '0 auto',
  },
  input: {
    margin: '10px 0',
    padding: '8px',
    width: '100%',
  },
  imagePreview: {
    margin: '10px 0',
    maxWidth: '200px',
    maxHeight: '200px',
    objectFit: 'cover',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  cancelButton: {
    backgroundColor: 'grey',
  },
};

export default WorkshopManager;

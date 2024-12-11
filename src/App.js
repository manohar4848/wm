import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login';
import CreateAccountPage from './components/createaccount';
import RegisterPage from './components/register'; 
import HomePage from './components/home';
import AboutUs from './components/aboutus';
import Workshops from './components/workshops';
import AdminDashboard from './components/AdminDashboard';
import WorkshopManager from './components/WorkshopManager';
import Registration from './components/registerations';
import Materials from './components/Materals';
import Python from './components/python';
import PythonCourse from './components/pythonCourse';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/createaccount" element={< CreateAccountPage/>} />
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} /> 
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/workshops" element={<WorkshopManager />} />
          <Route path="/admin/registeration" element={<Registration />} />
          <Route path="/admin/materials" element={<Materials />} />
          <Route path="/python" element={<Python />} />
          <Route path="/pythoncourse" element={<PythonCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

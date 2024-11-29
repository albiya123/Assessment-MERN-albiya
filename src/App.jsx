import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home.jsx';
import AddBlog from './Component/AddBlog.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/add new blog" style={styles.link}>
            Add Blog
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add new blog" element={<AddBlog />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: 'light blue',
    color: 'lavender',
  },
  link: {
    color: 'red',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default App;

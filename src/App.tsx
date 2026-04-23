import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import FormationsPage from './pages/formations/FormationsPage';
import FormationDetail from './pages/formations/FormationDetail';
import InscriptionPage from './pages/InscriptionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TemoignagesPage from './pages/TemoignagesPage';
import FAQPage from './pages/FAQPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import BlogPage from './pages/BlogPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
        <Route path="/courses" element={<Layout><FormationsPage /></Layout>} />
        <Route path="/courses/:id" element={<Layout><FormationDetail /></Layout>} />
        <Route path="/inscription/:id" element={<Layout><InscriptionPage /></Layout>} />
        <Route path="/temoignages" element={<Layout><TemoignagesPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Routes without Layout */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;

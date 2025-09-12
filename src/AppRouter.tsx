import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import App from './App';
import AdminPanel from './admin/AdminPanel';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import AchievementsPage from './pages/AchievementsPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

const AppRouter = () => {

  return (
    <HelmetProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Qadmin" element={<AdminPanel />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1e293b',
                color: '#fff',
                border: '1px solid #334155'
              }
            }}
          />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default AppRouter;
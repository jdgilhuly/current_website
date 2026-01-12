import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/Main';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Design from '../pages/Design';
import NotFound from '../pages/NotFound';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/main" replace />} />
    <Route path="/main" element={<Main />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/design" element={<Design />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

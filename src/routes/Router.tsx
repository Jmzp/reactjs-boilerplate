import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, PageError } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/error" element={<PageError />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

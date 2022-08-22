import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { Home, PageError } from '../pages';

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} exact />
      <Route element={<PageError />} />
      <Route
        path="*"
        element={<Navigate to="/home" replace />}
      />
    </Routes>
  </BrowserRouter>
);

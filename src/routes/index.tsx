import Home from '@mui/icons-material/Home';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { label: 'Página Inicial', icon: <Home />, path: '/home' },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

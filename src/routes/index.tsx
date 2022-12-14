import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, ListagemDeCidade } from '../pages';
import { useDrawerContext } from '../shared/contexts';
import Home from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { label: 'Página Inicial', icon: <Home />, path: '/home' },
      { label: 'Cidades', icon: <LocationCityIcon />, path: '/cidades' },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/cidades" element={<ListagemDeCidade />} />
      {/* <Route path="/cidades/detalhe/:id" element={<ListagemDeCidade />} /> */}

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

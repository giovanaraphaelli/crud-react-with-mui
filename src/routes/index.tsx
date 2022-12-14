import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, ListagemDePessoas } from '../pages';
import { useDrawerContext } from '../shared/contexts';
import Home from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { label: 'Página Inicial', icon: <Home />, path: '/home' },
      { label: 'Pessoas', icon: <PeopleIcon />, path: '/pessoas' },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/pessoas" element={<ListagemDePessoas />} />
      {/* <Route path="/pessoas/detalhe/:id" element={<ListagemDeCidade />} /> */}

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseProps {
  children?: ReactNode;
  titulo: string;
  barraDeFerramentas?: ReactNode;
}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({
  children,
  titulo,
  barraDeFerramentas,
}) => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        padding={1}
        height={theme.spacing(smDown ? 6 : 12)}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant={smDown ? 'h5' : 'h4'}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipses"
        >
          {titulo}
        </Typography>
      </Box>
      {barraDeFerramentas && <Box>{barraDeFerramentas}</Box>}
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};

import { Box, Button, Paper, useTheme } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';

export const FerramentasDeDetalhe: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      gap={1}
      component={Paper}
    >
      <Button
        variant="contained"
        color="primary"
        disableElevation
        startIcon={<SaveIcon />}
      >
        Salvar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<AddIcon />}
      >
        Salvar e Voltar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<DeleteIcon />}
      >
        Apagar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<AddIcon />}
      >
        Novo
      </Button>
      <Divider variant="middle" orientation="vertical" />
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<ArrowBackIcon />}
      >
        Voltar
      </Button>
    </Box>
  );
};

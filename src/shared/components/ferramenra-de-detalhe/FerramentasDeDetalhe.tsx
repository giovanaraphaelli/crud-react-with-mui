import { Box, Button, Paper, useTheme } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';

interface FerramentasDeDetalheProps {
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoCLicarEmNovo?: () => void;
  aoCLicarEmVoltar?: () => void;
  aoCLicarEmApagar?: () => void;
  aoCLicarEmSalvar?: () => void;
  aoCLicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<FerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoCLicarEmVoltar,
  aoCLicarEmSalvarEFechar,
  aoCLicarEmSalvar,
  aoCLicarEmNovo,
  aoCLicarEmApagar,
}) => {
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
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<SaveIcon />}
          onClick={aoCLicarEmSalvar}
        >
          Salvar
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && !mostrarBotaoSalvarEFecharCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<AddIcon />}
          onClick={aoCLicarEmSalvarEFechar}
        >
          Salvar e Voltar
        </Button>
      )}

      {mostrarBotaoSalvarEFecharCarregando && (
        <Skeleton width={180} height={60} />
      )}

      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<DeleteIcon />}
          onClick={aoCLicarEmApagar}
        >
          Apagar
        </Button>
      )}

      {mostrarBotaoApagarCarregando && <Skeleton width={110} height={60} />}

      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<AddIcon />}
          onClick={aoCLicarEmNovo}
        >
          {textoBotaoNovo}
        </Button>
      )}

      {mostrarBotaoNovoCarregando && !mostrarBotaoVoltarCarregando && (
        <Skeleton width={95} height={60} />
      )}

      <Divider variant="middle" orientation="vertical" />

      {mostrarBotaoVoltar && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<ArrowBackIcon />}
          onClick={aoCLicarEmVoltar}
        >
          Voltar
        </Button>
      )}

      {mostrarBotaoVoltarCarregando && <Skeleton width={110} height={60} />}
    </Box>
  );
};

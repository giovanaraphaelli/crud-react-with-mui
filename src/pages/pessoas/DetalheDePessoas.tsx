import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState('');

  useEffect(() => {
    if (id !== 'nova') {
      setIsLoading(true);
      PessoasService.getById(Number(id)).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          navigate('/pessoas');
        } else {
          setNome(result.nomeCompleto);
          console.log(result);
        }
      });
    }
  }, [id]);

  const handleSave = () => {
    console.log('Save');
  };
  const handleDelete = (id: number) => {
    if (confirm('Deseja apagar o registro?')) {
      PessoasService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert('Registro apagado com sucesso!');
          navigate('/pessoas');
        }
      });
    }
  };
  return (
    <LayoutBase
      titulo={id === 'nova' ? 'Cadastro de Pessoa' : nome}
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo="Nova"
          mostrarBotaoSalvar
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}
          aoCLicarEmSalvar={handleSave}
          aoCLicarEmSalvarEFechar={handleSave}
          aoCLicarEmApagar={() => handleDelete(Number(id))}
          aoCLicarEmNovo={() => {
            navigate('/pessoas/detalhe/nova');
          }}
          aoCLicarEmVoltar={() => {
            navigate('/pessoas');
          }}
        />
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" />}
      <p>DetalheDePessoas {id}</p>
    </LayoutBase>
  );
};

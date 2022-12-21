import { useNavigate, useParams } from 'react-router-dom';
import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('Save');
  };
  const handleDelete = () => {
    console.log('Save');
  };
  return (
    <LayoutBase
      titulo="Detalhe de Pessoa"
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo="Nova"
          mostrarBotaoSalvar
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}
          aoCLicarEmSalvar={handleSave}
          aoCLicarEmSalvarEFechar={handleSave}
          aoCLicarEmApagar={handleDelete}
          aoCLicarEmNovo={() => {
            navigate('/pessoas/detalhe/nova');
          }}
          aoCLicarEmVoltar={() => {
            navigate('/pessoas');
          }}
        />
      }
    >
      <p>DetalheDePessoas {id}</p>
    </LayoutBase>
  );
};

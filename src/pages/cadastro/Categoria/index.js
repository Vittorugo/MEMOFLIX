import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [nomeDaCategoria, setNomeCategoria] = useState('Filmes');

  setNomeCategoria( nome => {
    this.nomeDaCategoria = nome;
  });

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria} </h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange= {setNomeCategoria}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
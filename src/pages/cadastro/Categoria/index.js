import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }

  const [categorias, setCategorias] = useState([]);
  const [valoresDaCategoria, setValoresDaCategoria] = useState(valoresIniciais);

  function addCategoria( chave, valor ) {
    setValoresDaCategoria({ 
      ...valoresDaCategoria,
      [chave]: valor 
    });
  }

  function setValorCategoria( infoDoEvento){
    addCategoria(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value,
    );
  }

  
  function handleSubmit( infoDoEvento ){
    infoDoEvento.preventDefault();

    setCategorias([
      ...categorias, 
      valoresDaCategoria
    ]);

    setValoresDaCategoria(valoresIniciais)
  }
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valoresDaCategoria.nome} </h1>

      <form onSubmit={handleSubmit}>

        <FormField 
          label='Nome da Categoria: '
          type='text'
          name='nome'
          value={valoresDaCategoria.nome}
          onChange={setValorCategoria}
        />
        {/*
          <div>
            <label>
              Nome da Categoria:
              <input
                type="text"
                placeholder = ' Categoria'
                value={valoresDaCategoria.nome}
                name='nome'
                onChange = { setValorCategoria }
              />
            </label>
          </div>
        */}
        

        <FormField 
          label='Descrição: '
          type='text'
          name='descricao'
          value={valoresDaCategoria.descricao}
          onChange={setValorCategoria}
        />

        {/*
            <div>
            <label>
              Descrição:
              <textarea
                type="text"
                placeholder = ' Descreva a categoria ...'
                value={valoresDaCategoria.descricao}
                name='descricao'
                onChange = { setValorCategoria }
              />
            </label>
          </div>
        */}


        <FormField 
          label='Cor: '
          type='color'
          name='cor'
          value={valoresDaCategoria.cor}
          onChange={setValorCategoria}
        />

        {/*
          <div>
            <label>
              Cor:
              <input
                type="color"
                value={valoresDaCategoria.cor}
                name='cor'
                onChange = { setValorCategoria }
              />
            </label>
          </div>
        */}
        

        <button>
          Cadastro
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
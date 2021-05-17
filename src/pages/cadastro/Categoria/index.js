import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  useEffect(() => {
    const URL_BASE = `http://localhost:8080/categorias/`;
    fetch(URL_BASE).then(async (respostaDoServidor) => {
      const respostaConvertidaEmObjeto = await respostaDoServidor.json();

      return setCategories([...respostaConvertidaEmObjeto]);
    });
  }, []);

  return (
    <>
      <PageDefault>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form
          onSubmit={function handleSubmit(e) {
            e.preventDefault();

            setCategories([...categories, values]);

            setValues(valoresIniciais);
          }}
        >
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button as="a">Cadastrar</Button>
        </form>

        <div>Loading ...</div>
        <ul>
          {categories.map((category) => (
            <>
              <li key={category.nome}>{category.nome}</li>
              {/* <li key={category.nome}>{category.descricao}</li> */}
              {/* <li key={category.nome}>{category.cor}</li> */}
            </>
          ))}
        </ul>

        <Link to="/">Ir para Home</Link>
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;

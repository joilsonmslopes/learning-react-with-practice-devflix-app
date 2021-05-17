import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    {/* Switch - faz a lógica de verificação de rota está sendo chamada */}
    <Switch>
      {/* Route é como vamos declarar cada uma das paginas que temos,
      passando o path da rota a ser chamada e qual componente vai ser chamado */}
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('root')
);

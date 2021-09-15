//const element =  document.createElement('h1');
//element.innerText = 'Hello, Platzi made by Warrior';

//const container = document.getElementById('app');
//container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
//import Badge from "./componentes/badge/Badge";
//import BadgeNew from "./pages/BadgeNew";
//import Badges from "./pages/Badges";
import App from "./App";

import "./custome.scss";
//import "bootstrap/dist/css/bootstrap.css";

//ELEMENTOS
//const element = <h1>Hello, Platzi desde REACT</h1>,
// anternativa de element React.createElement(elemento, atributos, hijos)
//const element = React.createElement('h1', {}, 'Hola, soy los childen');
//const element = React.createElement('a', {href:'https://platzi.com'}, 'Si me das clic, voy a platzi');

//const name = "Wladdy López";
//const element = React.createElement("h1", {}, `Hola, soy ${name}`);

//ELEMENTO CON JSX
//const sumFuntion = () => 3 + 3;
/*
const jsx = 
<div>
<h1>Hola soy {name}</h1>
<p>JSX se usa por ejemplo para <b>expresiones:</b> {2+2}, <b>funciones:</b> {sumFuntion()}</p>
</div>
*/

//ReactDOM.render('que', 'donde');
//ReactDOM.render(element, container);
//ReactDOM.render(jsx, container);
/*
ReactDOM.render(
<Badge 
firstName='Ezequiel' 
lastName='Skols' 
jobTitle = 'Front End Engineer' 
email='wladdylopez@hotmail.com'
avatarUrl = 'https://s.gravatar.com/avatar/1f895306b4331da3cc6913120f2ed123?s=80' />, container);

*/
//COMPONENTES

//ReactDOM.render(<BadgeNew />, container) ;
//ReactDOM.render(<Badges />, container) ;

//Redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import apolloClientConfig from "./componentes/apollo-client/apollo-client-config";
import { ApolloProvider } from "@apollo/react-common";


//CONTENEDOR
const container = document.getElementById("app");
ReactDOM.render(
  <ApolloProvider client={apolloClientConfig}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  container
);

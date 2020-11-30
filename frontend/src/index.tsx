import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RestLink } from 'apollo-link-rest';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import WebFont  from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'sans-serif']
  }
});

const restLink = new RestLink({ uri: "http://localhost:3000/api/" });

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

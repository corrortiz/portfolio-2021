import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet } from 'grommet';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header';
import SnackBar from './components/SnackBar';
import Body from './components/Body';

import { theme } from './theme';
import { store } from './store';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Grommet theme={theme}>
        <Header />
        <Body />
        <SnackBar />
      </Grommet>
    </ApolloProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

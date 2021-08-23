import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Grommet } from 'grommet';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import SnackBar from './components/SnackBar';
import { store } from './store';
import { theme } from './theme';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Grommet theme={theme}>
          <Header />
          <Body />
          <SnackBar />
        </Grommet>
      </ApolloProvider>
    </Router>
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

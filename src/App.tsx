import React from 'react';
import { Provider } from 'react-redux'
import RepositoriesList from './components/RepositoriesList';
import store from './store';

const App = () => (
  <Provider store={store}>
    <RepositoriesList />
  </Provider>
)

export default App;

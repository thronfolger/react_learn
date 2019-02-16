import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import '../node_modules/normalize.css/normalize.css';
import './styles/index.css';
import './styles/TodoApp.css';

import TodoApp from 'components/TodoApp';

ReactDOM.render((
  <Provider store={store}>
    <TodoApp />
  </Provider>
), document.getElementById('root'));

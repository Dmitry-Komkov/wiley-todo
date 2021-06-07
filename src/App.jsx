import React from 'react';
import { Container } from '@material-ui/core';
import Layout from './Layout';
import Header from './components/Header';
import TodoWrap from './components/TodoWrap';

const App = () => {


  return (
    <div className="App">
      <Layout>
        <Header />
        <TodoWrap />
      </Layout>
    </div>
  );
}

export default App;
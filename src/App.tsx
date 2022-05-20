import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router'
import './App.scss';
const App = () => {
  const content = useRoutes(routes)
  return (
    <>
      {content}
    </>
  )
}

export default App;

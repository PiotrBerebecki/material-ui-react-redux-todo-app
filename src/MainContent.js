import React from 'react';

import Form from './Form';
import TodosList from './TodosList';
import './MainContent.css';

const MainContent = () => (
  <div className="main-content__container">
    <Form />
    <TodosList />
  </div>
);

export default MainContent;

import React from 'react';
import Sidebar from './Sidebar';
import Items from './Items.Constant';

const App: React.FC = () => {
  return (
    <div>
      <Sidebar items={Items}></Sidebar>
    </div>
  );
};

export default App;

import React, { useEffect } from 'react';
import { fetchData } from './utils/api';

const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default App;

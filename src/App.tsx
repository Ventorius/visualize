import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Filters from './components/Filters';
import Chart from './components/Chart';
import Loader from './components/Loader';

import { useChartData } from './utils/hooks';

const Wrapper = styled.div`
  height: 800px;
  display: flex;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const App = () => {
  const data = useChartData();

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Filters />
        <Chart data={data} />
      </Wrapper>
    </>
  );
};

export default App;

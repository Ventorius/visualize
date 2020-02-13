import React from 'react';
import styled from 'styled-components';

import Filters from './components/Filters';
import Chart from './components/Chart';
import { useChartData } from './utils/hooks';

const Wrapper = styled.div`
  height: 800px;
  display: flex;
`;

const App = () => {
  const data = useChartData();

  return (
    <Wrapper>
      <Filters />
      <Chart />
    </Wrapper>
  );
};

export default App;

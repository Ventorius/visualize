import React, { useEffect } from 'react';
import { fetchData } from './utils/api';
import styled from 'styled-components';

import Filters from './components/Filters';
import Chart from './components/Chart';

const Wrapper = styled.div`
  height: 800px;
  display: flex;
`;

const ChartWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Filters />
      <ChartWrapper>
        <Chart />
      </ChartWrapper>
    </Wrapper>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';

import Filters from './components/Filters';
import Chart from './components/Chart';
import Loader from './components/Loader';

import { useChartData } from './utils/hooks';

const Wrapper = styled.div`
  height: 800px;
  display: flex;
`;

const App = () => {
  const data = useChartData();

  if (!data) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Filters />
      <Chart data={data} />
    </Wrapper>
  );
};

export default App;

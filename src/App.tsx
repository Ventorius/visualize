import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Filters from './components/Filters';
import Chart from './components/Chart';
import Loader from './components/Loader';

import { useChartData } from './utils/hooks';
import { Row } from './utils/api';

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
  const chartData = useChartData();

  const [datasource, setDatasource] = useState<[] | string[]>([]);
  const [campaign, setCampaign] = useState<null | string>(null);

  const [datasourceOptions, setDatasourceOptions] = useState<[] | string[]>([]);
  const [campaignOptions, setCampaignOptions] = useState<[] | string[]>([]);

  const getDataSources = (chartData: Row[]): string[] => {
    const datasources = chartData.map(item => item.Datasource);
    return Array.from(new Set(datasources));
  };

  const getCampaignsForDataSources = (data: Row[], datasources: string[]) => {
    const campaigns = data.filter(item => datasources.includes(item.Datasource)).map(item => item.Campaign);
    return Array.from(new Set(campaigns));
  };
  // @ts-ignore
  const handleDatasourceChange = e => {
    if (e?.length > 0) {
      // @ts-ignore
      setDatasource(e.map(item => item.value));
    } else {
      setDatasource([]);
      setCampaign(null);
    }
  };
  // @ts-ignore
  const handleCampaignChange = e => {
    setCampaign(e.value);
  };

  useEffect(() => {
    if (chartData?.length) {
      const campaigns = getCampaignsForDataSources(chartData as Row[], datasource);
      setCampaignOptions(campaigns);
    }
  }, [datasource]);

  useEffect(() => {
    if (chartData?.length) {
      const options = getDataSources(chartData);
      setDatasourceOptions(options);
    }
  }, [chartData]);

  if (!chartData) {
    return <Loader />;
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Filters
          datasourceOptions={datasourceOptions}
          campaignOptions={campaignOptions}
          handleDatasourceChange={handleDatasourceChange}
          handleCampaignChange={handleCampaignChange}
          datasource={datasource}
          campaign={campaign}
        />
        <Chart data={chartData} />
      </Wrapper>
    </>
  );
};

export default App;

import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import Filters from './components/Filters';
import Chart from './components/Chart';
import Loader from './components/Loader';

import { useChartData } from './utils/hooks';
import { Row } from './utils/api';

const Wrapper = styled.div`
  height: 800px;
  display: flex;
`;

const App: FC = () => {
  const chartData = useChartData();
  const [filteredChartData, setFilteredChartData] = useState<null | Row[]>(null);

  const [datasource, setDatasource] = useState<[] | string[]>([]);
  const [campaign, setCampaign] = useState<null | string>(null);

  const [datasourceOptions, setDatasourceOptions] = useState<[] | string[]>([]);
  const [campaignOptions, setCampaignOptions] = useState<[] | string[]>([]);

  const getDataSourceOptions = (chartData: Row[]): string[] => {
    const datasources = chartData.map(item => item.Datasource);
    return Array.from(new Set(datasources));
  };

  const getCampaignOptionsForDataSources = (data: Row[], datasources: string[]) => {
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

  const applyFilters = () => {
    if (datasource.length === 0) {
      return setFilteredChartData(chartData);
    }

    console.log({ datasource, campaign });
    if (chartData?.length) {
      const newFilteredChartData = chartData.filter(item => {
        // @ts-ignore
        return datasource.includes(item.Datasource);
      });

      setFilteredChartData(newFilteredChartData);
    }
  };

  useEffect(() => {
    if (chartData?.length) {
      const campaigns = getCampaignOptionsForDataSources(chartData as Row[], datasource);
      setCampaignOptions(campaigns);
    }
  }, [datasource]);

  useEffect(() => {
    if (chartData?.length) {
      const options = getDataSourceOptions(chartData);
      setDatasourceOptions(options);

      setFilteredChartData(chartData);
    }
  }, [chartData]);

  if (!filteredChartData || !chartData) {
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
          handleApplyFilters={applyFilters}
        />
        <Chart data={filteredChartData} />
      </Wrapper>
    </>
  );
};

export default App;

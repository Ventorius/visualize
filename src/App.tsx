import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import Filters from './components/Filters';
import Chart from './components/Chart';
import Loader from './components/Loader';

import { useCampaignOptions, useChartData, useDatasourceOptions } from './utils/hooks';
import { Option, Row } from './utils/api';

const Wrapper = styled.div`
  height: 800px;
  display: flex;
`;

const App: FC = () => {
  const chartData = useChartData();
  const [filteredChartData, setFilteredChartData] = useState<null | Row[]>(null);

  const [datasource, setDatasource] = useState<string[]>([]);
  const [campaign, setCampaign] = useState<null | string>(null);

  const [datasourceOptions, setDatasourceOptions] = useDatasourceOptions([]);
  const [campaignOptions, setCampaignOptions] = useCampaignOptions([]);

  const handleDatasourceChange = (options: Option[]) => {
    if (options?.length > 0) {
      setDatasource(options.map(item => item.value));
    } else {
      setDatasource([]);
      setCampaign(null);
    }
  };

  const handleCampaignChange = (option: Option) => setCampaign(option.value);

  const applyFilters = () => {
    if (datasource.length === 0) {
      return setFilteredChartData(chartData);
    }

    if (chartData?.length) {
      const filteredByDatasource = chartData.filter(item => datasource.includes(item.Datasource));

      if (campaign === null) {
        return setFilteredChartData(filteredByDatasource);
      }

      const filteredByCampaign = filteredByDatasource.filter(item => item.Campaign === campaign);

      return setFilteredChartData(filteredByCampaign);
    }
  };

  const handleResetFilters = () => {
    setCampaign(null);
    setDatasource([]);
    setFilteredChartData(chartData);
  };

  useEffect(() => {
    if (chartData?.length) {
      setCampaignOptions(chartData, datasource);
    }
  }, [datasource]);

  useEffect(() => {
    if (chartData?.length) {
      setDatasourceOptions(chartData);
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
          handleResetFilters={handleResetFilters}
        />
        <Chart data={filteredChartData} />
      </Wrapper>
    </>
  );
};

export default App;

import { useState, useCallback, useEffect } from 'react';
import { fetchData, Row } from './api';

export const useChartData = () => {
  const [data, setData] = useState<null | Row[]>(null);

  const getData = async () => {
    const data = await fetchData();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};

export const useDatasourceOptions = (initialValue: string[] | []) => {
  const [datasourceOptions, setDatasourceOptions] = useState<[] | string[]>(initialValue);

  return [
    datasourceOptions,
    useCallback(
      (chartData: Row[]) => {
        const datasources = chartData.map(item => item.Datasource);
        setDatasourceOptions(Array.from(new Set(datasources)));
      },
      [datasourceOptions],
    ),
  ] as const;
};

export const useCampaignOptions = (initialValue: string[] | []) => {
  const [campaignOptions, setCampaignOptions] = useState<[] | string[]>(initialValue);

  return [
    campaignOptions,
    useCallback(
      (chartData: Row[], datasources: string[]) => {
        const campaigns = chartData.filter(item => datasources.includes(item.Datasource)).map(item => item.Campaign);
        setCampaignOptions(Array.from(new Set(campaigns)));
      },
      [campaignOptions],
    ),
  ] as const;
};

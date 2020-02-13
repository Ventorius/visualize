import { useState, useEffect } from 'react';
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

import React, { FC } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Row } from '../utils/api';

interface Props {
  data: Row[];
}

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chart: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <ResponsiveContainer>
        <LineChart
          data={data.slice(0, 400)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="Date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="linear" dataKey="Clicks" stroke="#8884d8" dot={false} />
          <Line yAxisId="right" type="linear" dataKey="Impressions" stroke="#82ca9d" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default Chart;

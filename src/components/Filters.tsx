import React, { FC } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import Button from './Button';
import { Option } from '../utils/api';

//region styled

const Wrapper = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  padding: 100px 20px 20px 20px;
  flex-direction: column;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const StyledSelect = styled(Select)`
  width: 100%;
`;

//endregion

interface Props {
  campaignOptions: string[];
  datasourceOptions: string[];
  handleCampaignChange: (option: Option) => void;
  handleDatasourceChange: (options: Option[]) => void;
  datasource: string[] | [];
  campaign: string | null;
  handleApplyFilters: () => void;
  handleResetFilters: () => void;
}

const Filters: FC<Props> = ({
  datasourceOptions,
  campaignOptions,
  handleCampaignChange,
  handleDatasourceChange,
  campaign,
  datasource,
  handleApplyFilters,
  handleResetFilters,
}) => {
  const mapToOptions = (options: string[]): Option[] => {
    return options.map(item => {
      return {
        label: item,
        value: item,
      };
    });
  };

  return (
    <Wrapper>
      <FormControl>
        <Label>Datasource</Label>
        <StyledSelect
          closeMenuOnSelect={false}
          defaultValue={[]}
          value={mapToOptions(datasource)}
          isMulti
          name="datasource"
          options={mapToOptions(datasourceOptions)}
          onChange={handleDatasourceChange}
        />
      </FormControl>
      <FormControl>
        <Label>Campaign</Label>
        <StyledSelect
          defaultValue={null}
          name="campaign"
          value={{ key: campaign, label: campaign }}
          options={mapToOptions(campaignOptions)}
          onChange={handleCampaignChange}
        />
      </FormControl>
      <Button onClick={handleApplyFilters}>Apply filters</Button>
      <Button hollow onClick={handleResetFilters}>
        Reset filters
      </Button>
    </Wrapper>
  );
};

export default Filters;

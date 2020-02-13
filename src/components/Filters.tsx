import React, { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import Button from './Button';

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
  handleCampaignChange: Dispatch<SetStateAction<[] | string[]>>;
  handleDatasourceChange: Dispatch<SetStateAction<[] | string[]>>;
  datasource: string[] | [];
  campaign: string | null;
}

const Filters: FC<Props> = ({ datasourceOptions, campaignOptions, handleCampaignChange, handleDatasourceChange, campaign, datasource }) => {
  return (
    <Wrapper>
      <FormControl>
        <Label>Datasource</Label>
        <StyledSelect
          closeMenuOnSelect={false}
          defaultValue={[]}
          // @ts-ignore
          value={datasource.map((item: string) => {
            return {
              label: item,
              value: item,
            };
          })}
          isMulti
          name="datasource"
          options={datasourceOptions.map((item: string) => {
            return {
              label: item,
              value: item,
            };
          })}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleDatasourceChange}
        />
      </FormControl>

      <FormControl>
        <Label>Campaign</Label>
        <StyledSelect
          defaultValue={null}
          name="campaign"
          value={{ key: campaign, label: campaign }}
          options={campaignOptions.map((item: string) => {
            return {
              label: item,
              value: item,
            };
          })}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleCampaignChange}
        />
      </FormControl>
      <Button>Apply filters</Button>
    </Wrapper>
  );
};

export default Filters;

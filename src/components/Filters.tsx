import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import Button from './Button';

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

const options = [
  { label: 'a', value: 'a' },
  { label: 'b', value: 'b' },
  { label: 'b', value: 'b' },
];

const Filters = () => {
  return (
    <Wrapper>
      <FormControl>
        <Label>Datasource</Label>
        <StyledSelect
          closeMenuOnSelect={false}
          defaultValue={[]}
          isMulti
          name="datasource"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </FormControl>

      <FormControl>
        <Label>Campaign</Label>
        <StyledSelect defaultValue={[]} name="campaign" options={options} className="basic-multi-select" classNamePrefix="select" />
      </FormControl>
      <Button>Apply filters</Button>
    </Wrapper>
  );
};

export default Filters;

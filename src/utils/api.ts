import csv from 'csvtojson/v2';

export interface Row {
  Date: string;
  Datasource: string;
  Campaign: string;
  Clicks: number;
  Impressions: number;
}

export interface Option {
  label: string;
  value: string;
}


const URL = 'http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv';

const csvToJson = (data: string) => {
  return csv({
    colParser: {
      Impressions: 'number',
      Clicks: 'number',
      Date: 'string',
    },
  }).fromString(data);
};

export const fetchData = async () => {
  const res = await fetch(URL);
  const data = await res.text();
  return csvToJson(data);
};

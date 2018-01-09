import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const numberOptions = [
  {
    text: '1',
    value: '1'
  }, 
  {
    text: '2',
    value: '2'
  },
  {
    text: '3',
    value: '3'
  },
  {
    text: '4',
    value: '4'
  },
  {
    text: '5',
    value: '5'
  },
];

const NumberDropdown = () => (
  <Dropdown className='numberDropdown' placeholder='1' fluid selection options={numberOptions} />
);

export default NumberDropdown;

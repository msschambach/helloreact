import React from 'react';
import ReactDOM from 'react-dom';
import {ClassyForm, ClassySelect} from './classy/components';


ReactDOM.render(
  <ClassyForm className='smashin-classy-form'> 
    <ClassySelect
    prompt='Countries'
    className='select-country'
    id='country-select'
    options={[
      'Kenya',
      'United States of America',
      'Gabon',
      'Eritrea'
    ]} />
  </ClassyForm>,
  document.getElementById('root')
);
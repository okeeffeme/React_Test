import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StatefulCheckboxGroup from './statefulcheckbox';

storiesOf('StatefulCheckboxGroup', module)
  .add('test', () => (
    <StatefulCheckboxGroup />
  ));

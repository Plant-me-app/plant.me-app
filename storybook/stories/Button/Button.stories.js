import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '../../../src/components/Button/index';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Primary Button', () => (
    <Button onPress={() => {console.log('clicked')}} title="Primary" type="primary"/>
  ))
  .add('Secondary Button', () => (
    <Button onPress={() => {console.log('clicked')}} title="Secondary" type="secondary"/>
  ))

import React from 'react';
import InputText from '../../../src/components/InputText';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import style from './style';
import InputDropdown from '../../../src/components/InputDropdown';

storiesOf('Input', module)
  .addDecorator((getStory) => <View style={style.input}>{getStory()}</View>)
  .add('InputText', () => (
      <InputText placeholder='Nome da Planta' title="Nome" />
  ))
  .add('InputDropdown', () => (
    <InputDropdown />
  ))

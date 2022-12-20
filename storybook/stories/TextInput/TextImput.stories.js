import React from 'react';
import InputText from '../../../src/components/InputText';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import style from './style';

storiesOf('Input', module)
  .addDecorator((getStory) => <View style={style.input}>{getStory()}</View>)
  .add('InputText', () => (
      <InputText placeholder='Nome da Planta' title="Nome" />
  ))

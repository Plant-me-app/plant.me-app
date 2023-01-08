import React from 'react';
import InputText from '../../../src/components/InputText';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import style from './style';
import InputDropdown from '../../../src/components/InputDropdown';
import PlantImage from '../../../src/components/PlantImage';

const plants = require("../../../src/assets/mocks/plants.json");

const plantSize = require("../../../src/assets/mocks/plantSize.json")

storiesOf('Input', module)
  .addDecorator((getStory) => <View style={style.input}>{getStory()}</View>)
  .add('InputText', () => (
      <InputText placeholder='Nome da Planta' title="Nome" />
  ))
  .add('Plants Dropdown', () => (
    <InputDropdown items={plants} placeholder="Espécie" />
  ))
  .add('Plants Size Dropdown', () => (
    <InputDropdown items={plantSize} placeholder="Porte"/>
  ))
  .add('Plant Image Select', () => (
    <PlantImage />
  ))

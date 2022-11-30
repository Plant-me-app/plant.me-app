import React from 'react';
import CenterView from '../CenterView';
import Button from '../../../src/components/Button/index';
import { storiesOf } from '@storybook/react-native';
import { buttonTypes } from '../../../src/constants/buttonsTypes';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Primary Button', () => (
    <Button onPress={() => {console.log('clicked')}} title="Primary" type={buttonTypes.Primary}/>
  ))
  .add('Secondary Button', () => (
    <Button onPress={() => {console.log('clicked')}} title="Secondary" type={buttonTypes.Secondary}/>
  ))
  .add('Primary Small Button', () => (
    <Button onPress={() => {console.log('clicked')}} title="Salvar" type={buttonTypes.SmallPrimary}/>
  ))
  .add('Secondary Small Button', () => (
    <Button onPress={() => {console.log('clicked')}} title="Cancelar" type={buttonTypes.SmallSecondary}/>
  ))
  .add('Danger Small Button', () => (
    <Button onPress={() => {console.log('clicked')}} title="Confirmar" type={buttonTypes.SmallDanger}/>
  ))

import React from 'react';
import CenterView from '../CenterView';
import NavigationTab from '../../../src/components/NavigationTab';
import LeafButton from '../../../src/components/NavigationTab/LeafButton';
import { storiesOf } from '@storybook/react-native';

storiesOf('NavigationTab', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('NavigationTab', () => (
    <NavigationTab />
  ))
  .add('AddPlantButton', () => (
    <LeafButton />
  ))

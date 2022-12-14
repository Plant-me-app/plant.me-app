import React from 'react';
import LeafButton from '../../../src/components/LeafButton';
import RootNavigator from '../../../src/routes/navigation/rootNavigator';
import { storiesOf } from '@storybook/react-native';
import style from './style';
import { View } from 'react-native';

storiesOf('NavigationTab', module)
  .addDecorator((getStory) => <View style={style.tab}>{getStory()}</View>)
  .add('NavigationTab', () => (
    <RootNavigator />
  ))
  .add('AddPlantButton', () => (
    <LeafButton />
  ))

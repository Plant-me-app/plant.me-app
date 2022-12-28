import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import AvatarModal from '../../../src/components/AvatarModal/AvatarModal';
import style from './style';

storiesOf('Avatar Modal', module)
  .addDecorator((getStory) => <View style={style.container}>{getStory()}</View>)
  .add('Avatar Modal', () => (
    <AvatarModal />
  ))

import React from 'react';
import {Text, View} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Entypo';

const Header = ({imageUri, name}) => (
  <View style={styles.container}>
    <View style={styles.leftBlock}>
      <ProfilePicture uri={imageUri} size={40} />
      <Text style={styles.name}>{name}</Text>
    </View>

    <View style={styles.rightBlock}>
      <Icon name={'dots-three-vertical'} size={20} />
    </View>
  </View>
);

export default Header;

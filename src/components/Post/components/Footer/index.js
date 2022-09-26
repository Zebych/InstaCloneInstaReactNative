import React, {useEffect, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {styles} from './styles';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likesCountProp);

  const onLikedPressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconContainerLeftBlock}>
          <TouchableWithoutFeedback onPress={onLikedPressed}>
            {isLiked ? (
              <ADIcon
                name={'heart'}
                size={25}
                style={[styles.icon, {color: 'red'}]}
              />
            ) : (
              <ADIcon name={'hearto'} size={25} style={styles.icon} />
            )}
          </TouchableWithoutFeedback>
          <FontistoIcon name={'comment'} size={23} style={styles.icon} />
          <IoniconsIcon
            name={'paper-plane-outline'}
            size={25}
            style={styles.icon}
          />
        </View>
        <FAIcon name={'bookmark-o'} size={25} style={styles.icon} />
      </View>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}111</Text>
    </View>
  );
};

export default Footer;

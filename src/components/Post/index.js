import React from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {styles} from './styles';

const Post = ({post}) => {
  const {user, postImageUri, caption, likesCount, postedAt} = post;
  return (
    <View style={styles.postContainer}>
      <Header imageUri={user.imageUri} name={user.name} />
      <Body imageUri={postImageUri} />
      <Footer caption={caption} likesCount={likesCount} postedAt={postedAt} />
    </View>
  );
};

export default Post;

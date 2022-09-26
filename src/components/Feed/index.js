import React from 'react';
import {FlatList} from 'react-native';

import Post from '../Post';
import Stories from '../ProfilePicture/Stories';

const posts = [
  {
    user: {
      imageUri:
        'https://avatars.yandex.net/get-music-content/5412783/46b6c6da.p.5821649/m1000x1000',
      name: 'blonde',
      id: 1,
    },
    postImageUri:
      'https://funart.pro/uploads/posts/2021-04/1617400480_27-p-oboi-krasivaya-noch-28.jpg',
    caption: 'Beautiful wood',
    likesCount: 123,
    postedAt: '6 minutes ago',
    id: 1,
  },
  {
    user: {
      imageUri:
        'https://avatars.yandex.net/get-music-content/5412783/46b6c6da.p.5821649/m1000x1000',
      name: 'blonde',
      id: 2,
    },
    postImageUri:
      'https://icdn.lenta.ru/images/2020/04/13/10/20200413103632693/square_320_4ddd2d6837cb97a8294802f9df826110.jpg',
    caption: 'Beautiful wood',
    likesCount: 123,
    postedAt: '6 minutes ago',
    id: 2,
  },
  {
    user: {
      imageUri:
        'https://avatars.yandex.net/get-music-content/5412783/46b6c6da.p.5821649/m1000x1000',
      name: 'blonde',
      id: 3,
    },
    postImageUri:
      'https://avatars.yandex.net/get-music-content/5412783/46b6c6da.p.5821649/m1000x1000',
    caption: 'Beautiful wood',
    likesCount: 123,
    postedAt: '6 minutes ago',
    id: 3,
  },
];

const Feed = () => (
  <FlatList
    data={posts}
    renderItem={({item}) => {
      return <Post post={item} />;
    }}
    ListHeaderComponent={Stories}
  />
);

export default Feed;

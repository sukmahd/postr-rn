/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { icons } from '@Assets'
import FeedListItem from './Components/FeedListItem';
import { FeedItem } from './Types/type';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const mockItem: FeedItem = {
  username: "Andi Lau",
  comments: 10,
  content: "Ayo kita berkelana keliling dunia dengan menggunakan awan kinton mencari dragon ball",
  date: '17 desember 2022'
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FeedListItem data={mockItem}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    padding: 10,
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginTop: 6
  },
  content: {
    fontSize: 15,
    fontWeight: '400',
    marginVertical: 6
  },
  commentIcon: {
    width: 20,
    height: 20,
    marginRight: 8
  },
  commentContainer: {
    flexDirection:'row'
  }
});

export default App;

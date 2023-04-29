/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import FeedScreen from './Screens/FeedScreen'
import CommentScreen from './Screens/CommentScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;




function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <CommentScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  }
});

export default App;

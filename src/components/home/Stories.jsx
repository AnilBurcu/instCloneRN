import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import stories from '../../utils/stories';
import Story from './Story';

const Stories = () => {
  return (
    <View style={styles.stories}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map(story => (
          <Story key={story.id || story.title} story={story} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  stories: {
    paddingVertical: 10,
  },
});

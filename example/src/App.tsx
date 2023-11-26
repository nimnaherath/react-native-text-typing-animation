import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AnimatedTyping from 'react-native-text-typing-animation';

export default function App() {
  return (
    <View style={styles.container}>
      <AnimatedTyping
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore temporibus quisquam asperiores obcaecati similique ad quasi explicabo tempore iste quos aperiam a earum dignissimos, quam voluptates ipsa! Est, reiciendis."
        style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

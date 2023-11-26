import React, { useRef } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import AnimatedTyping, {
  type AnimatedTextRef,
} from 'react-native-text-typing-animation';

export default function App() {
  const animationTextRef = useRef<AnimatedTextRef>(null);

  return (
    <View style={styles.container}>
      <AnimatedTyping
        ref={animationTextRef}
        started
        text="This is a animated text"
        style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}
        onCompleted={() => console.log('Completed')}
      />
      <Button title="Start" onPress={() => animationTextRef.current?.start()} />
      <Button title="Stop" onPress={() => animationTextRef.current?.pause()} />
      <Button title="Clear" onPress={() => animationTextRef.current?.clear()} />
      <Button
        title="Check Completed"
        onPress={() => console.log(animationTextRef.current?.isCompleted)}
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

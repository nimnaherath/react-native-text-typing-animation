# react-native-text-typing-animation

The `react-native-text-typing-animation` package provides a simple way to create animated text typing effects in React Native. Let's go through the documentation for the package based on the provided `Props` and usage example.
## Installation

```sh
npm install react-native-text-typing-animation
```
## Usage

This example demonstrates a simple implementation

  ```js

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
        text="This is animated text"
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


```


## Component Props:

#### `text` (required, string)

The text that will be animated.
#### `style` (optional, TextStyle)

Additional styles to be applied to the animated text.
#### `curserColor` (optional, string)

Color of the cursor. Defaults to the text color.
#### `cursorBlink` (optional, number)

Controls the blink speed of the cursor. The value represents the duration of a blink in milliseconds. Defaults to `100`.

#### `duration` (optional, number)

The total duration of the typing animation in milliseconds. Defaults to `200` milliseconds.

#### `started` (optional, boolean)

Whether the typing animation should start immediately. Defaults to `false`.

#### `onCompleted` (optional, () => void)

A callback function that will be called when the typing animation completes.

## AnimatedTypingRef  Methods:

#### `start()`

Starts or resumes the typing animation.

#### `pause()`

Pauses the typing animation.

#### `clear()`

Clears the text and stops the animation.

#### `isCompleted`

A boolean property indicating whether the typing animation has completed.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License
MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

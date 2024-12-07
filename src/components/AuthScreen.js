import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Login from './Login';
import Register from './Register';

const { width, height } = Dimensions.get('window');

const AuthScreen = () => {
  const [translateX] = useState(new Animated.Value(0));
  const [activeBox, setActiveBox] = useState(0); // 0 for Login, 1 for Signup

  const goToScreen = (boxIndex) => {
    Animated.spring(translateX, {
      toValue: boxIndex === 0 ? 0 : -width,
      useNativeDriver: true,
    }).start();
    setActiveBox(boxIndex);
  };

  const handleGesture = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const handleGestureEnd = (event) => {
    const { translationX } = event.nativeEvent;
    if (translationX < -50 && activeBox === 0) {
      // Swipe left: Go to Signup
      goToScreen(1);
    } else if (translationX > 50 && activeBox === 1) {
      // Swipe right: Go to Login
      goToScreen(0);
    } else {
      // Return to the current box
      goToScreen(activeBox);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleGestureEnd}>
          <Animated.View
            style={[
              styles.swipeContainer,
              { transform: [{ translateX }] },
            ]}
          >
            {/* Login Box */}
            <View style={[styles.box]}>
              <Login goToScreen={goToScreen} />
            </View>

            {/* Signup Box */}
            <View style={[styles.box]}>
              <Register goToScreen={goToScreen}/>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  swipeContainer: {
    flex: 1, // Ensure the swipe container takes the full height of the screen
    flexDirection: 'row',
    width: width * 2, // Two full screens wide
  },
  box: {
    width,
    height, // Ensure the box takes the full height of the screen
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
 
 
});

export default AuthScreen;

import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity,Text } from "react-native";
import { TextInput } from "react-native-paper";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CreatePost = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.create_and_post_row}>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="Share your Thoughts"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.send_icon} onPress={() => console.log('Send:', text)}>
         <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
    marginRight: 10, // Add spacing between the input and the icon
  },
  create_and_post_row: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically centered
    width: '100%',
  },
  send_icon: {
    justifyContent: 'flex-end',
  },
});

export default CreatePost;

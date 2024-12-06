// FormField.js
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';

const TextField = ({ control, name, rules, placeholder, error }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text>{placeholder}:</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: error ? 'red' : '#ccc',
              padding: 10,
            }}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
    </View>
  );
};

export default TextField;

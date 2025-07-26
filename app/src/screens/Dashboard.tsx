import React from 'react';
import { View, Text, Button } from 'react-native';
import { getSuggestions } from '../services/genai';

export default function Dashboard() {
  const [suggestion, setSuggestion] = React.useState('');

  const fetchSuggestion = async () => {
    const text = await getSuggestions();
    setSuggestion(text);
  };

  return (
    <View>
      <Button title="Improve my productivity" onPress={fetchSuggestion} />
      <Text>{suggestion}</Text>
    </View>
  );
}

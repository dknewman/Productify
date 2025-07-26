import { fetch } from 'react-native-fetch-api'; // placeholder fetch polyfill

export async function getSuggestions(): Promise<string> {
  // Replace URL with actual GenAI API endpoint
  try {
    const response = await fetch('https://api.openai.com/v1/suggestions');
    const data = await response.json();
    return data.text || 'No suggestion';
  } catch (e) {
    console.error(e);
    return 'Error fetching suggestion';
  }
}

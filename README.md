# Productify

Productify is an iOS productivity app built with React Native and Expo. It helps users track and improve their productivity with AI-generated suggestions.

## Project Structure
- `app/` – React Native application source
- `app/src` – core source code (screens, services, database)
- `app/__tests__` – unit tests with Jest

## Setup
1. Install dependencies:
   ```sh
   cd app
   npm install
   ```
2. Start the app with Expo:
   ```sh
   npm start
   ```
3. Run tests:
   ```sh
   npm test
   ```

## Tasks (in order of priority)
1. **Implement secure user registration and login.** Currently passwords are stored in plaintext in SQLite; add hashing and validation.
2. **Integrate a real GenAI API** for productivity suggestions in `src/services/genai.ts`.
3. **Expand the dashboard** with features to track tasks and time management.
4. **Improve database schema** to support syncing and more complex data.
5. **Add end-to-end tests** and CI configuration.


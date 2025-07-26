import * as SQLite from 'expo-sqlite';

export function openDatabase() {
  return SQLite.openDatabase('productivity.db');
}

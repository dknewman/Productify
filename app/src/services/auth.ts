import { openDatabase } from '../database/db';

const db = openDatabase();

db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT);'
  );
});

export function registerUser(email: string, password: string): Promise<void> {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO users (email, password) values (?, ?);', [email, password],
        () => resolve(),
        (_, err) => { reject(err); return false; }
      );
    });
  });
}

export function authenticateUser(email: string, password: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM users WHERE email = ? AND password = ?;', [email, password],
        (_, { rows }) => resolve(rows.length > 0),
        (_, err) => { reject(err); return false; }
      );
    });
  });
}

import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('post.db')

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INT)',
          [],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }

  static getPosts() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM posts',
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        )
      })
    })
  }

  static createPost() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO posts (text, date, booked, img) VALUES (?, ?, ?, ?)`,
          [10, 11, 12, 13],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        )
      })
    })
  }

  static showBase() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SHOW TABLES',
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        )
      })
    })
  }

}



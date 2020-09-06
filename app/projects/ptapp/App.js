import React from 'react';
import { NavigationApp } from './src/navigation/NavigationApp'
import { DB } from './src/localDb'

export default function App() {


  DB.createPost()
  const localBase = async () => {
    const load = await DB.getPosts()
    console.log(load)
  }

  localBase()


  try {
    DB.init()
    console.log('Database started...')
  } catch (e) {
    console.log('error: ', e)
  }

  return (
    <NavigationApp />
  );




}



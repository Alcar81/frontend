// frontend/src/App.tsx

import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-simple-rest';
import UserList from './components/UserList';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://localhost:3001/api');

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="users" list={UserList} />
    </Admin>
  );
}

export default App;

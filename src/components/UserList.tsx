// frontend/src/components/UserList.tsx

import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

const UserList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

export default UserList;

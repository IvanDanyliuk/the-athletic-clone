import React from 'react';
import { UserFilters } from '../filters/';
import { UsersTable } from '../tables/UsersTable/';
import SubPageHeader from '../ui/SubPageHeader';


const Users: React.FC = () => {
  return (
    <>
      <SubPageHeader 
        title='Users' 
        link='users/new-author' 
      />
      <UserFilters />
      <UsersTable />
    </>
  );
};

export default Users;
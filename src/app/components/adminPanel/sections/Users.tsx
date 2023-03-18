import React from 'react';
import UsersTable from '../tables/UsersTable/UsersTable';
import SubPageHeader from '../ui/SubPageHeader';


const Users: React.FC = () => {
  return (
    <>
      <SubPageHeader 
        title='Users' 
        link='new-author' 
      />
      <UsersTable />
    </>
  );
};

export default Users;
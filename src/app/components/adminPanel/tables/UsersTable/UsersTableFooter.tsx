import React from 'react';
import { styled, TableFooter, TablePagination, TableRow } from '@mui/material';


interface IUsersTableFooterProps {
  pageCount: number;
  page: number;
  onPageChange: (e: unknown, newPage: number) => void;
}

const UsersTablePagination = styled(TablePagination)`
  width: 100%;
`;


const UsersTableFooter: React.FC<IUsersTableFooterProps> = ({ 
  pageCount, 
  page, 
  onPageChange 
}) => {
  return (
    <TableFooter>
      <TableRow>
        <UsersTablePagination
          rowsPerPageOptions={[]}
          count={pageCount}
          rowsPerPage={10}
          page={page}
          onPageChange={onPageChange}
        />
      </TableRow>
    </TableFooter>
  );
};

export default UsersTableFooter;
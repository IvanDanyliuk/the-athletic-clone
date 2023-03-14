import React from 'react';
import { styled, TableFooter, TablePagination, TableRow } from '@mui/material';


interface IMaterialsTableFooterProps {
  pageCount: number,
  page: number,
  onPageChange: (e: unknown, newPage: number) => void
}

const MaterialsTablePagination = styled(TablePagination)`
  width: 100%;
`;


const MaterialsTableFooter: React.FC<IMaterialsTableFooterProps> = ({ 
  pageCount, 
  page, 
  onPageChange 
}) => {
  return (
    <TableFooter>
      <TableRow>
        <MaterialsTablePagination
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

export default MaterialsTableFooter;
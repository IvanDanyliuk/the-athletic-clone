import React from 'react';
import { styled, TableFooter, TablePagination, TableRow } from '@mui/material';


interface IClubsTableFooterProps {
  pageCount: number;
  page: number;
  onPageChange: (e: unknown, newPage: number) => void;
}

const ClubsTablePagination = styled(TablePagination)`
  width: 100%;
`;


const ClubsTableFooter: React.FC<IClubsTableFooterProps> = ({ 
  pageCount, 
  page, 
  onPageChange 
}) => {
  return (
    <TableFooter>
      <TableRow>
        <ClubsTablePagination
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

export default ClubsTableFooter;
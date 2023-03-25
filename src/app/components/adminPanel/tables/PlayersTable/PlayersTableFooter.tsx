import React from 'react';
import { styled, TableFooter, TablePagination, TableRow } from '@mui/material';


interface IPlayersTableFooterProps {
  pageCount: number,
  page: number,
  onPageChange: (e: unknown, newPage: number) => void
}

const PlayersTablePagination = styled(TablePagination)`
  width: 100%;
`;


const PlayersTableFooter: React.FC<IPlayersTableFooterProps> = ({ 
  pageCount, 
  page, 
  onPageChange 
}) => {
  return (
    <TableFooter>
      <TableRow>
        <PlayersTablePagination
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

export default PlayersTableFooter;
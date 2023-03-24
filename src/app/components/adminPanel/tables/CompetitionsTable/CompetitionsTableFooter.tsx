import React from 'react';
import { styled, TableFooter, TablePagination, TableRow } from '@mui/material';


interface ICompetitionsTableFooterProps {
  pageCount: number,
  page: number,
  onPageChange: (e: unknown, newPage: number) => void
}

const CompetitionsTablePagination = styled(TablePagination)`
  width: 100%;
`;


const CompetitionsTableFooter: React.FC<ICompetitionsTableFooterProps> = ({ 
  pageCount, 
  page, 
  onPageChange 
}) => {
  return (
    <TableFooter>
      <TableRow>
        <CompetitionsTablePagination
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

export default CompetitionsTableFooter;
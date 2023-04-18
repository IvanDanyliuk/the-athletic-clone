import React from 'react';
import { styled, TableFooter, TablePagination, TableRow } from '@mui/material';


interface IContentTableFooterProps {
  pageCount: number,
  page: number,
  onPageChange: (e: unknown, newPage: number) => void
}

const ContentTablePagination = styled(TablePagination)`
  width: 100%;
`;


const ContentTableFooter: React.FC<IContentTableFooterProps> = ({ 
  pageCount, 
  page, 
  onPageChange 
}) => {
  return (
    <TableFooter>
      <TableRow>
        <ContentTablePagination
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

export default ContentTableFooter;
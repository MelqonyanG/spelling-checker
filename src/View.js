import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    overflow: 'auto',
  },
});

export default function View(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function deleteWord(word){
      console.log("delete");
      
  }

  const rows = props.words;

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
                <TableCell align='center'>
                    Բառեր
                </TableCell>
                <TableCell align='center'>
                    Ջնջել
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover tabIndex={-1} key={row}>
                    <TableCell align='center'>
                        {row}
                    </TableCell>
                    <TableCell align='center'>
                        <IconButton color="secondary" onClick={deleteWord(row)}>
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

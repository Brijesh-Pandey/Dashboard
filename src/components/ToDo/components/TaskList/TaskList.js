/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress
} from '@material-ui/core';

import {Empty} from "utils";

const useStyles = makeStyles({
  root: {
    width: '100vw',
  },
  container: {
    maxHeight: 440,
  },
  loader: {
    position: 'absolute',
    left: "45%",
    top: "45%"
  }
});

const TaskList = ({
  isLoading,
  tasksList
}) => {
  const classes = useStyles();

  const columns = [
    {
      id: 'description',
      label: 'Task',
      minWidth: 170
    },
    {
      id: 'completed',
      label: 'Completed',
      minWidth: 80,
      align: 'left',
      format: (value) => value.toLocaleString('en-US')
    },
    {
      id: 'createdAt',
      label: 'Created-At',
      minWidth: 170,
      align: 'right'
    },
    {
      id: 'updatedAt',
      label: 'Updated-At',
      minWidth: 170,
      align: 'right'
    }
  ];

  return (
    <>
      {
        tasksList.length ? (
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                {
                  isLoading ? (
                    <CircularProgress
                      color="primary"
                      className={classes.loader}
                    />
                  ) : (
                    <TableBody>
                      {tasksList.map((task) => {
                        return (
                          <TableRow hover key={task.id}>
                            {columns.map((column) => {
                              const value = task[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'boolean' ? column.format(value) : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  )
                }
              </Table>
            </TableContainer>
          </Paper>
        ) : (
          <Empty
            message="Your Task List Is Empty, Start by Adding New Task"
          />
        )
      }
    </>

  );
}

export default TaskList;

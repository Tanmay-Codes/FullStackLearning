import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import React from "react";

function MuiTable() {
  return (
    <Box sx={{ height: "500px", width: "500px" }} padding={2}>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: "300px" }}
        elevation={10}
      >
        <Table aria-label="table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableDate.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const tableDate = [
  {
    id: 1,
    first_name: "Winfield",
    last_name: "Truin",
    email: "wtruin0@newsvine.com",
    gender: "Male",
    ip_address: "238.130.70.186",
  },
  {
    id: 2,
    first_name: "Liesa",
    last_name: "Fessier",
    email: "lfessier1@hp.com",
    gender: "Female",
    ip_address: "33.76.204.79",
  },
  {
    id: 3,
    first_name: "Tymothy",
    last_name: "Annesley",
    email: "tannesley2@yellowpages.com",
    gender: "Male",
    ip_address: "157.116.123.184",
  },
  {
    id: 4,
    first_name: "Stavro",
    last_name: "Dillinton",
    email: "sdillinton3@cyberchimps.com",
    gender: "Male",
    ip_address: "164.193.100.112",
  },
  {
    id: 5,
    first_name: "Derek",
    last_name: "Engel",
    email: "dengel4@google.cn",
    gender: "Male",
    ip_address: "152.126.42.88",
  },
  {
    id: 6,
    first_name: "Jerrilyn",
    last_name: "Vinden",
    email: "jvinden5@webnode.com",
    gender: "Female",
    ip_address: "79.172.120.62",
  },
  {
    id: 7,
    first_name: "Gretna",
    last_name: "Skune",
    email: "gskune6@unc.edu",
    gender: "Polygender",
    ip_address: "53.146.215.255",
  },
  {
    id: 8,
    first_name: "Kate",
    last_name: "Fosdyke",
    email: "kfosdyke7@nbcnews.com",
    gender: "Female",
    ip_address: "5.153.166.10",
  },
  {
    id: 9,
    first_name: "Erich",
    last_name: "Doby",
    email: "edoby8@oracle.com",
    gender: "Male",
    ip_address: "122.198.210.209",
  },
  {
    id: 10,
    first_name: "Hoyt",
    last_name: "Munby",
    email: "hmunby9@freewebs.com",
    gender: "Male",
    ip_address: "94.238.231.51",
  },
];

export default MuiTable;

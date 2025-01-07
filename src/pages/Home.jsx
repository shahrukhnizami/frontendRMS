import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid,
} from "@mui/material";

const Home = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      {/* <HomeIcon sx={{ mr: 2 }} /> */}
      <PeopleIcon sx={{ mr: 2 }} />
      {/* <PeopleOutline /> */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        All Users
      </Typography>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ backgroundColor: "white", color: "red", fontWeight: "bold" }}
        >
          Add New Users
        </Button>
      </Link>
    </Toolbar>
  </AppBar>
  )
}

export default Home

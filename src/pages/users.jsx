import React, { useState, useEffect } from "react";
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
import { Home as HomeIcon, PeopleOutline } from "@mui/icons-material";
import PeopleIcon from '@mui/icons-material/People';
import { Link } from "react-router-dom";

const users = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:4040/users");
          const data = await response.json();
          setUserData(data.data); // Assuming your API response contains the user data under `data`
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {/* <HomeIcon sx={{ mr: 2 }} /> */}
            <PeopleIcon sx={{ mr: 2 }} />
            {/* <PeopleOutline /> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              All Users
            </Typography>
            <Link to="/admin" style={{ textDecoration: "none" }}>
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
  
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {loading ? (
                <Typography>Loading...</Typography>
              ) : (
                <TableContainer component={Paper}>
                  <Table aria-label="user data table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell align="right">Monthly Rent</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {userData.map((user) => (
                        <TableRow key={user._id}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>{user.contactNumber || "N/A"}</TableCell>
                          <TableCell>{user.city || "N/A"}</TableCell>
                          <TableCell>{user.country || "N/A"}</TableCell>
                          <TableCell align="right">
                            {user.monthlyRent ? `$${user.monthlyRent}` : "N/A"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  };

export default users

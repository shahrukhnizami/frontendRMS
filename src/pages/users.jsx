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
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { People as PeopleIcon } from "@mui/icons-material";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const list = (
    <Box sx={{ width: 300, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add New User
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <TextField
        fullWidth
        label="Name"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Role"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Contact"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="City"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Country"
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <PeopleIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            All Users
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "white",
              color: "green",
              fontWeight: "bold",
            }}
            onClick={toggleDrawer(true)} // Open the Drawer
          >
            Add New Users
          </Button>
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

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default Users;

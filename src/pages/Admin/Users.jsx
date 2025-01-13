import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Box,
  IconButton,
  Drawer,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // Default role
  });

  // Fetch users from API
 // Fetch users from API
const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4040/api/auth/users');
      
      // Ensure the response has the 'users' key
      if (response.data && response.data.users) {
        setUsers(response.data.users);
      } else {
        throw new Error('Unexpected response structure');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Failed to load users. Please check the API or try again.');
    }
  };
  

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle Add User
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4040/api/auth/register', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 201) {
        alert('User added successfully!');
        setIsDrawerOpen(false);
        fetchUsers(); // Refresh user list
      }
    } catch (error) {
      console.error('Error adding user:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Failed to add user.');
    }
  };

  // Handle Input Change in Drawer Form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Admin - User Management
      </Typography>
      <Button
        variant="contained"
        startIcon={<Add />}
        sx={{ marginBottom: 2 }}
        onClick={() => setIsDrawerOpen(true)}
      >
        Add User
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Avatar src={user.image || ''} alt={user.name} />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: user.role === 'admin' ? '#D32F2F' : user.role === 'agent' ? '#1976D2' : '#388E3C',
                    }}
                  >
                    {user.role}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add User Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box sx={{ width: 300, padding: 3 }} component="form" onSubmit={handleAddUser}>
          <Typography variant="h6" gutterBottom>
            Add New User
          </Typography>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            label="Role"
            name="role"
            select
            fullWidth
            margin="normal"
            required
            value={formData.role}
            onChange={handleChange}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="agent">Agent</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
            Add User
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Users;

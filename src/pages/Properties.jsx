import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Sample data for properties
const propertyData = [
  {
    id: 1,
    name: 'Sunny Apartments',
    location: 'Downtown',
    type: 'Residential',
    status: 'Available',
  },
  {
    id: 2,
    name: 'Green Valley Villas',
    location: 'Suburbs',
    type: 'Residential',
    status: 'Rented',
  },
  {
    id: 3,
    name: 'Blue Lagoon Offices',
    location: 'Business District',
    type: 'Commercial',
    status: 'Available',
  },
];

export default function Properties() {
  return (
    <Grid container spacing={3} style={{ padding: 16 }}>
      <Grid item xs={12}>
        <Typography variant="h4">Properties</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Manage all properties assigned to you
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Property List</Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => alert('Add new property clicked!')}
              >
                Add Property
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {propertyData.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>{property.id}</TableCell>
                  <TableCell>{property.name}</TableCell>
                  <TableCell>{property.location}</TableCell>
                  <TableCell>{property.type}</TableCell>
                  <TableCell>{property.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Select, MenuItem, FormControl, InputLabel, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WatchForm from './components/WatchForm';
import WatchList from './components/WatchList';
import * as storage from './utils/storage';

const SORTS = {
  recent: { label: 'Recently added', fn: (a, b) => b.createdAt - a.createdAt },
  datePurchased: { label: 'Date purchased', fn: (a, b) => new Date(b.datePurchased || 0) - new Date(a.datePurchased || 0) },
  price: { label: 'Price', fn: (a, b) => (b.price || 0) - (a.price || 0) },
  brand: { label: 'Brand (A → Z)', fn: (a, b) => (a.brand || '').localeCompare(b.brand || '') }
};

export default function App() {
  const [watches, setWatches] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [sortKey, setSortKey] = useState('recent');

  useEffect(() => {
    setWatches(storage.getWatches());
  }, []);

  function handleAdd(watch) {
    const list = storage.addWatch(watch);
    setWatches(list);
  }

  function handleDelete(id) {
    const list = storage.removeWatch(id);
    setWatches(list);
  }

  function handleUpdate(id, updates) {
    const list = storage.updateWatch(id, updates);
    setWatches(list);
  }

  const sorted = [...watches].sort(SORTS[sortKey].fn);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            chronovault
          </Typography>
          <FormControl variant="standard" sx={{ minWidth: 180, mr: 2 }}>
            <InputLabel sx={{ color: 'white' }}>Sort</InputLabel>
            <Select
              value={sortKey}
              onChange={e => setSortKey(e.target.value)}
              sx={{ color: 'white' }}
            >
              {Object.entries(SORTS).map(([k, v]) => (
                <MenuItem value={k} key={k}>{v.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <IconButton color="inherit" onClick={() => setShowForm(s => !s)}>
            <AddCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            {showForm && (
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>Add watch</Typography>
                <WatchForm onAdd={handleAdd} />
              </Paper>
            )}
          </Grid>

          <Grid item xs={12} md={8}>
            <WatchList watches={sorted} onDelete={handleDelete} onUpdate={handleUpdate} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

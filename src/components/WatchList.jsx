import React from 'react';
import { Grid, Typography } from '@mui/material';
import WatchCard from './WatchCard';

export default function WatchList({ watches, onDelete, onUpdate }) {
  if (!watches || watches.length === 0) {
    return <Typography sx={{ color: 'text.secondary' }}>No watches yet — add your first watch.</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {watches.map(w => (
        <Grid item xs={12} sm={6} key={w.id}>
          <WatchCard watch={w} onDelete={onDelete} onUpdate={onUpdate} />
        </Grid>
      ))}
    </Grid>
  );
}

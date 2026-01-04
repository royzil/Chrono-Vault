import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function fmtDate(d) {
  if (!d) return '';
  const dt = new Date(d);
  return dt.toLocaleDateString();
}

export default function WatchCard({ watch, onDelete, onUpdate }) {
  return (
    <Card sx={{ background: 'transparent', border: '1px solid #111' }}>
      {watch.image && (
        <CardMedia component="img" height="200" image={watch.image} alt={`${watch.brand} ${watch.model}`} />
      )}
      <CardContent>
        <Typography variant="h6" sx={{ color: 'primary.main' }}>{watch.brand || '—'}</Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>{watch.model}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Ref: {watch.reference || '—'}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Purchased: {fmtDate(watch.datePurchased)}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Price: {watch.price != null ? `$${watch.price}` : '—'}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>{watch.notes}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onDelete(watch.id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => onUpdate(watch.id, { /* placeholder */ })} aria-label="edit">
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

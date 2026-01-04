import React, { useState } from 'react';
import { TextField, Button, Stack, InputLabel } from '@mui/material';

export default function WatchForm({ onAdd }) {
  const [form, setForm] = useState({
    brand: '',
    model: '',
    reference: '',
    datePurchased: '',
    price: '',
    notes: ''
  });
  const [imageData, setImageData] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoadingImage(true);
    const reader = new FileReader();
    reader.onload = () => {
      setImageData(reader.result);
      setLoadingImage(false);
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { ...form, image: imageData, price: form.price ? Number(form.price) : null };
    onAdd(payload);
    setForm({ brand: '', model: '', reference: '', datePurchased: '', price: '', notes: '' });
    setImageData(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField label="Brand" name="brand" value={form.brand} onChange={handleChange} fullWidth required />
        <TextField label="Model" name="model" value={form.model} onChange={handleChange} fullWidth />
        <TextField label="Reference" name="reference" value={form.reference} onChange={handleChange} fullWidth />
        <TextField label="Date purchased" name="datePurchased" value={form.datePurchased} onChange={handleChange} type="date" InputLabelProps={{ shrink: true }} />
        <TextField label="Price" name="price" value={form.price} onChange={handleChange} type="number" fullWidth />
        <TextField label="Notes" name="notes" value={form.notes} onChange={handleChange} multiline rows={3} />
        <div>
          <InputLabel sx={{ mb: 1 }}>Photo</InputLabel>
          <input accept="image/*" type="file" onChange={handleFile} />
          {loadingImage && <div>Loading image...</div>}
        </div>
        <Button type="submit" variant="contained" color="primary">Add watch</Button>
      </Stack>
    </form>
  );
}

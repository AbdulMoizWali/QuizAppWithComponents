import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Option({label, onSelect}) {
  return <>
      <Button variant="contained" onClick={() => onSelect(label)}>{label}</Button>
  </>
}
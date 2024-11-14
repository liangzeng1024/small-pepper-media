import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ServiceCard({ image, name, description, price }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
      {/* Service Image */}
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        title={name}
      />
      
      {/* Service Name and Description */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      
      {/* Price and Add to Cart Button */}
      <CardActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
          ${price}
        </Typography>
        <Button variant="contained" size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

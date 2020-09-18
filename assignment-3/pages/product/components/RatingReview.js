import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

export default function RatingReview({review}) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rating Review</Typography>
        <Typography component="legend" style={{color: 'red'}}>{review}</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={5}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" readOnly />}
        />
      </Box>
    </div>
  );
}

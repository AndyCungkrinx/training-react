import React from 'react';
import {Container, Box, Typography} from '@material-ui/core';
import Homepage from './home';

//Navigation
import Navigasi from '../components/navigation';

export default function Index() {
  return (
    <Container style={{maxWidth:'lg'}}>
      <Navigasi />
      <Box my={4}>
        <Homepage/>
        <div style={{height:200}}></div>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright© Andy Cungkrinx 2020
        </Typography>
      </Box>
    </Container>
  );
}

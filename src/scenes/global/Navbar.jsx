import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, Button, IconButton } from '@mui/material';
import {
  PersonOutline,
  ShoppingBagOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      backgroundColor="rgba(255,255,255,0.95)"
      color="black"
      position="fixed"
      top={0}
      left={0}
      zIndex={1}
    >
      <Box
        width="80%"
        display="flex"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          color={shades.secondary[500]}
        >
          Minth.
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap={20}
          zIndex="2"
        >
          <IconButton sx={{ color: 'black' }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <PersonOutline />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <ShoppingBagOutlined />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

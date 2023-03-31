import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton } from '@mui/material';
import {
  PersonOutline,
  ShoppingBagOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme';
import { setIsCartOpen } from '../../state';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

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
          fontSize="1.5rem"
          fontWeight="bold"
        >
          Minth.
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton
            sx={{
              color: 'black',
              '&:hover': { color: shades.secondary[500] },
            }}
          >
            <SearchOutlined sx={{ fontSize: '25px' }} />
          </IconButton>

          <IconButton
            sx={{ color: 'black', '&:hover': { color: shades.secondary[500] } }}
          >
            <PersonOutline sx={{ fontSize: '25px' }} />
          </IconButton>

          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              '&: .Muibadge-badge': {
                right: 5,
                top: 5,
                padding: '0 4px',
                height: '14px',
                minWidth: '13px',
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{
                color: 'black',
                '&:hover': { color: shades.secondary[500] },
              }}
            >
              <ShoppingBagOutlined sx={{ fontSize: '25px' }} />
            </IconButton>
          </Badge>

          <IconButton
            sx={{ color: 'black', '&:hover': { color: shades.secondary[500] } }}
          >
            <MenuOutlined sx={{ fontSize: '25px' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

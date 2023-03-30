import React from 'react';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import { shades } from '../../theme';
import {
  decreaseCount,
  increaseCount,
  setIsCartOpen,
  removeFromCart,
} from '../../state';
import { useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((item, total) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    <Box
      display={isCartOpen ? 'block' : 'none'}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      {/* MODALE PANIER */}
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        {/* HEADER */}
        <Box padding="30px" overflow="auto" height="100%">
          <FlexBox mb="15px">
            <Typography fontWeight="bold" variant="h3">
              Panier ({cart.length})
            </Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>
          {/* LISTE DES PRODUITS */}
          <Box>
            {cart.map((item) => (
              <Box key={`${item.attributes.name}-${item.id}`}>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.name}
                      width="100%"
                      height="164px"
                      src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    {/* NOM DU PRODUIT */}
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">
                        {item.attributes.name}
                      </Typography>

                      {/* SUPPRIMER UN PRODUIT */}
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>

                    <Typography>{item.attributes.excerpt}</Typography>

                    {/* NOMBRE DE PRODUITS */}
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        {/* RETIRER 1 AU PRODUIT */}
                        <IconButton
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>

                        {/* AJOUTER 1 AU PRODUIT */}
                        <IconButton
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>

                      {/* PRIX */}
                      <Typography fontWeight="bold">
                        {item.attributes.price * item.count} €
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          <Box mt="15px">
            <FlexBox>
              {/* PRIX TOTAL */}
              <Typography fontWeight="bold">Total</Typography>
              <Typography fontWeight="bold">{totalPrice} €</Typography>
            </FlexBox>

            {/* BOUTON POUR VALIDER LE PANIER */}
            <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: 'white',
                borderRadius: '0',
                minWidth: '100%',
                padding: '20px 40px',
                margin: '20px 0',
                '&:hover': {
                  backgroundColor: shades.secondary[500],
                },
              }}
              onClick={() => {
                navigate('/checkout');
                dispatch(setIsCartOpen({}));
              }}
            >
              Valider le panier
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;

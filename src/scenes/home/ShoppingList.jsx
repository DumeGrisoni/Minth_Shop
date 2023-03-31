import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import ItemComponent from '../../components/ItemComponent';
import { setItems } from '../../state';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('all');
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  console.log('items:', items);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      'http://localhost:1337/api/items?populate=image',
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    ).then((res) => res.json());
    dispatch(setItems(items.data));
  }

  useEffect(() => {
    getItems();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const topRatedItems = items.filter(
    (item) => item.attributes.category === 'mieuxNotés'
  );
  const newArrialsItems = items.filter(
    (item) => item.attributes.category === 'nouveautés'
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes.category === 'meilleuresVentes'
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3 " textAlign="center">
        Nos Produits <b>Vedettes</b>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            sx: { display: isNonMobile ? 'block' : 'none' },
          }}
          sx={{
            m: '25px',
            '& .Muitabs-flexContainer': {
              flexWrap: 'wrap',
            },
          }}
        >
          <Tab label="Tout" value="all" />
          <Tab label="Nouveautés" value="nouveautés" />
          <Tab label="Meilleures ventes" value="meilleuresVentes" />
          <Tab label="Mieux notés" value="mieuxNotés" />
        </Tabs>
        <Box
          margin="0 auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, 300px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%"
        >
          {value === 'all' &&
            items.map((item) => (
              <ItemComponent
                item={item}
                width="300px"
                key={`${item.name}-${item.id}`}
              />
            ))}
          {value === 'mieuxNotés' &&
            topRatedItems.map((item) => (
              <ItemComponent
                item={item}
                width="300px"
                key={`${item.name}-${item.id}`}
              />
            ))}
          {value === 'nouveautés' &&
            newArrialsItems.map((item) => (
              <ItemComponent
                item={item}
                width="300px"
                key={`${item.name}-${item.id}`}
              />
            ))}
          {value === 'meilleuresVentes' &&
            bestSellersItems.map((item) => (
              <ItemComponent
                item={item}
                width="300px"
                key={`${item.name}-${item.id}`}
              />
            ))}
        </Box>
      </Typography>
    </Box>
  );
};

export default ShoppingList;

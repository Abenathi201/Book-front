import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchData } from '../utils/fetchData';
import CartItem from './CartItem';
import closeIcon from '../assets/icons/x-letter (1).svg';

const Cart = ({ setIsOpen }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const userData = localStorage.getItem('userData');
  const { userId } = JSON.parse(userData || '{}');

  useEffect(() => {
    if (userId) {
      const fetchCartItems = async () => {
        try {
          const fetchedItems = await fetchData(`/cart/${userId}`);
          setCartItems(fetchedItems.cartItems);
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Error fetching cart items:', error);
          setIsLoggedIn(false);
        }
      };

      fetchCartItems();
    } else {
      setIsLoggedIn(false);
    }
  }, [userId]);

  const updateCartItemQuantity = async (itemId, quantity) => {
    try {
      await fetchData(`/cart/${userId}/updateCart/${itemId}`, {
        method: 'PUT',
        body: JSON.stringify({ quantity }),
        headers: { 'Content-Type': 'application/json' }
      });

      setCartItems(updateItems =>
        updateItems.map(item => (item._id === itemId ? { ...item, quantity } : item))
      );
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
    }
  };

  const deleteCartItem = async (itemId) => {
    try {
      await fetchData(`/cart/${userId}/deleteItem/${itemId}`, {
        method: 'DELETE'
      });
  
      setCartItems(
        deleteItems => deleteItems.filter(item => item._id !== itemId)
      );
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  return (
    <Box
      sx={{
        width: '400px',
        height: '100vh',
        background: '#FFF',
        padding: '20px',
        marginLeft: 'auto',
        flex: 1
      }}
    >
      <Stack direction="row" justifyContent="space-between" justifyItems="center" alignItems="center">
        <Typography variant="h5">Cart</Typography>
        <img onClick={() => setIsOpen(false)} src={closeIcon} className="pointer" width={30} height={30} alt="closeIcon" />
      </Stack>
      <Box sx={{ background: 'rgb(241, 241, 242)', mt: '20px', padding: '5px' }}>
        <Typography textAlign="center"> Free Standard Shipping </Typography>
      </Box>
      <Typography sx={{ mt: '15px', color: '#808080', fontWeight: 'bold' }}> {cartItems.length} items </Typography>

      <Box>
        {isLoggedIn && cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem key={item._id} item={item} updateCartItemQuantity={updateCartItemQuantity} deleteCartItem={deleteCartItem} />
          ))
        ) : (
          <Typography>Please login to manage your cart</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
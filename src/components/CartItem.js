import React from 'react';
import { Box, Typography } from '@mui/material';

import trashIcon from '../assets/icons/trash.svg';
import plusIcon from '../assets/icons/plus.svg';
import minusIcon from '../assets/icons/minus.svg';

const CartItem = ({ item, updateCartItemQuantity, deleteCartItem }) => {
  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateCartItemQuantity(item._id, item.quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    updateCartItemQuantity(item._id, item.quantity + 1);
  };

  const handleDeleteItem = () => {
    deleteCartItem(item._id);
  };

  return (
    <Box sx={{ mt: '45px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <Box>
          <img src={item.image} alt={item.name} width={110} height={125} />
        </Box>

        <Box>
          <Typography> {item.name} </Typography>
          <Typography> {item.author} </Typography>
          <Typography> $ {item.amount} </Typography>
          <Box sx={{ display: 'flex' }}>
            <button className="cart-btn" onClick={handleDecreaseQuantity}>
              <img className="pointer" src={minusIcon} width="100%" height="100%" alt="minusIcon" />
            </button>

            <button className="input-btn"> {item.quantity} </button>
            
            <button className="cart-btn" onClick={handleIncreaseQuantity}>
              <img className="pointer" src={plusIcon} width="100%" height="100%" alt="plusIcon" />
            </button>
          </Box>
        </Box>

        <Box>
          <img className="pointer" src={trashIcon} alt="trashIcon" onClick={handleDeleteItem} />
        </Box>
      </Box>
      <hr style={{ marginTop: '25px' }} />
    </Box>
  );
};

export default CartItem;
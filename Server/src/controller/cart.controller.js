import { Cart } from "../models/cart.model.js";


const addToCart = async (req, res) => {
    try {
      const { productId, quantity } = req.body;
      const userId = req.user.id;
      
      const cart = await Cart.findOne({ userId });
      if (!cart) {
        const newCart = new Cart({ userId, items: [{ productId, quantity }] });
        await newCart.save();
        res.status(200).json({ success: true, message: "Item added to cart successfully", cart: newCart });
      } else {
        const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);
        if (itemIndex > -1) {
          cart.items[itemIndex].quantity += quantity;
        } else {
          cart.items.push({ productId, quantity });
        }
        await cart.save();
        res.status(200).json({ success: true, message: "Item added to cart successfully", cart });
      }
      
    } catch (error) {
      res.status(500).json({ success: false, message: error.message }); 
    }
} 


// Get All User Cart

const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id }).populate("items.productId");
        res.status(200).json({ success: true, cart });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


// Update Cart

const updateCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) {
            return res.status(404).json({ success: false, message: "Cart not found" });
        }
        const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);
        if (itemIndex === -1) {
            return res.status(404).json({ success: false, message: "Item not found in cart" });
        }
        cart.items[itemIndex].quantity = quantity;
        await cart.save();
          res.status(200).json({ success: true, message: "Cart updated successfully", cart });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


// Delete Cart
const deleteCart = async (req, res) => {
    try {
        const { id} = req.params;
        const cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) {
            return res.status(404).json({ success: false, message: "Cart not found" });
        }
        const itemIndex = cart.items.findIndex((item) => item._id.toString() === id);
        if (itemIndex === -1) {
            return res.status(404).json({ success: false, message: "Item not found in cart" });
        }
        cart.items.splice(itemIndex, 1);
        await cart.save();
        res.status(200).json({ success: true, message: "Item removed from cart successfully", cart });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}



// Clear entire cart
const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    cart.items = []; // Empty the cart
    await cart.save();

    res.status(200).json({ success: true, message: "Cart cleared successfully", cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};





export { addToCart, getCart, updateCart, deleteCart, clearCart };






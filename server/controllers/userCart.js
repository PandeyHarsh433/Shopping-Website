const CartItem = require("../models/Cart");

// ADD A CART ITEM

exports.addCartItem = async (req, res) => {
  const { userId, items } = req.body;

  try {
    let cartItem = await CartItem.findOne({ userId });

    if (!cartItem) {
      cartItem = new CartItem({ userId, items: [] });
    }

    for (const item of items) {
      const existingItem = cartItem.items.find(
        (cartItem) =>
          cartItem.item.toString() === item.productId &&
          cartItem.size === item.size
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        cartItem.items.push({
          item: item.productId,
          quantity: item.quantity,
          size: item.size,
        });
      }
    }

    await cartItem.save();

    res.status(200).json({ success: true, data: cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// Delete a cart item

exports.deleteCartItem = async (req, res) => {
  const { userId, productId, size } = req.body;

  try {
    const cartItem = await CartItem.findOne({ userId });

    if (!cartItem) {
      return res.status(404).json({ success: false, error: "Cart not found" });
    }

    const itemIndex = cartItem.items.findIndex(
      (item) => item.item.toString() === productId && item.size === size
    );

    if (itemIndex === -1) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found in cart" });
    }

    cartItem.items.splice(itemIndex, 1);

    await cartItem.save();

    res.status(200).json({ success: true, data: cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

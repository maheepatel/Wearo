import userModel from "../models/userModel.js";

// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      // if there is item already in the cart, update the quantity for the selected size
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        //   else set the quantity to 1
        cartData[itemId][size] = 1;
      }
    } else {
      // if there is no item in the cart then add the item to cart
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.status(200).json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "An error occurred while adding to cart",
      error,
    });
  }
};

// update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res
      .status(200)
      .json({ success: true, message: "Cart updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the cart",
      error,
    });
  }
};

// get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log("userId", userId);

    const userData = await userModel.findById(userId);
    const cartData = await userData.cartData;
    res.status(200).json({
      success: true,
      message: "Cart data fetched successfully",
      cartData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching cart data of user",
      error,
    });
  }
};

export { addToCart, updateCart, getUserCart };

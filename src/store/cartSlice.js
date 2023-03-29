import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], deliveryFee: 20, freeDeliveryFrom: 200 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find(
        (item) => item.product.id === newProduct.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ product: newProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const productId = action.payload.productId;
      const amount = action.payload.amount;

      const cartItem = state.items.find((p) => p.product.id == productId);
      if (cartItem) {
        cartItem.quantity += amount;
      }
      if (cartItem.quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.product.id !== productId
        );
      }
    },
  },
});

export default cartSlice.reducer;
export const { addCartItem, changeQuantity } = cartSlice.actions;
export const selectNumberOfItems = (state) => state.cart.items.length;
export const selectSubtotal = (state) =>
  state.cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

const cartSelector = (state) => state.cart;

export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubtotal,
  (cart, subtotal) => (subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

export const selectTotalPrice = createSelector(
  selectSubtotal,
  selectDeliveryPrice,
  (subTotal, delPrice) => delPrice + subTotal
);

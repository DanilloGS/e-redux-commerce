import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const SLICE_NAME = "cart";

interface ICartSlice {
  productsStack: Product[];
}

const initialState: ICartSlice = {
  productsStack: [],
};

const cartSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clearCart(state) {
      state.productsStack = [];
    },
    deleteProduct(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.productsStack = state.productsStack.filter(
        (product) => product.id !== id
      );
    },
    addProduct(state, action: PayloadAction<Product>) {
      const product = action.payload;
      state.productsStack.push(product);
    },
  },
});

export const { addProduct, clearCart, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;

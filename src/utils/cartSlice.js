import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS
      state.items.push(action.payload);
      console.log(current(state.items))
    },
    removeItem: (state, action) => {
        const idx = state.items.findIndex((item)=> item.card.info.id === action.payload)
        state.items.splice(idx,1)

    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

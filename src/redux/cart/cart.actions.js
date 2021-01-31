import CartActionTypes from "./cart.actions.types";

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export {toggleCartHidden};

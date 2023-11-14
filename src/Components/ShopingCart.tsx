import useShopingCart from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShopingCart = ({}: ShoppingCartProps) => {
  const {} = useShopingCart();

  const cartTab = document.querySelector("svg");
  const body = document.querySelector("body");

  cartTab?.addEventListener("click", () => {
    body?.classList.toggle("showCart");
    console.log(cartTab);
  });

  return (
    <div className="cartTab">
      <h1>Cart</h1>

      <div className="btn">
        <button className="close">Close</button>
        <button className="checkOut">CHECK Out</button>
      </div>
    </div>
  );
};

export default ShopingCart;

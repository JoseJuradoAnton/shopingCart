import {Offcanvas} from "react-bootstrap";
import useShopingCart from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShopingCart = ({isOpen}: ShoppingCartProps) => {
  const {closeCart} = useShopingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default ShopingCart;
